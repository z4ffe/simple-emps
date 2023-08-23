import httpStatus from 'http-status'
import {DBDataSource} from '../config/db'
import {Session} from '../entity/session'
import {User} from '../entity/user'
import {ApiError} from '../middleware/apiError'
import {verifyPassword} from '../utils/passwordHashing'
import {DecodedJWTToken, generateTokens, verifyRefreshToken} from '../utils/tokens'
import {sessionService} from './session.service'
import {userService} from './user.service'

export const authService = {
	async login(login: string, password: string) {
		const user = await userService.findUserByLogin(login)
		if (!user) {
			throw new ApiError(httpStatus.BAD_REQUEST, 'Wrong login or password')
		}
		const comparePassword = await verifyPassword(password, user.password)
		if (!comparePassword) {
			throw new ApiError(httpStatus.BAD_REQUEST, 'Wrong login or password')
		}
		const tokens = generateTokens(login, user.role)
		const sessionExist = await sessionService.findSessionByUser(user)
		if (sessionExist) {
			sessionExist.refresh_token = tokens.refreshToken
			await DBDataSource.manager.save(sessionExist)
			return {tokens, login: user.login, role: user.role}
		}
		const newSession = new Session()
		newSession.userId = user
		newSession.refresh_token = tokens.refreshToken
		await DBDataSource.manager.save(newSession)
		return {tokens, login: user.login, role: user.role}
	},
	async refreshAccessToken(refreshToken: string) {
		try {
			const jwtResult = verifyRefreshToken(`Bearer ${refreshToken}`) as DecodedJWTToken
			const tokens = generateTokens(jwtResult.login, jwtResult.role)
			const user = await DBDataSource.manager.findOneBy(User, {login: jwtResult.login})
			if (user) {
				const sessionExist = await sessionService.findSessionByUser(user)
				if (sessionExist && sessionExist.refresh_token === refreshToken) {
					sessionExist.refresh_token = tokens.refreshToken
					await DBDataSource.manager.save(sessionExist)
					return tokens
				}
			} else {
				throw new ApiError(httpStatus.BAD_REQUEST, 'Something went wrong')
			}
		} catch (error) {
			throw new ApiError(httpStatus.BAD_REQUEST, 'Something went wrong')
		}
	},
	async removeSession(refreshToken: string) {
		const session = await DBDataSource.manager.findOneBy(Session, {refresh_token: refreshToken})
		if (session) {
			await DBDataSource.manager.remove(session)
		} else {
			return
		}
	},
}