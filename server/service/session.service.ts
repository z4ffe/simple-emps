import httpStatus from 'http-status'
import {Equal} from 'typeorm'
import {DBDataSource} from '../config/db'
import {Session} from '../entity/session'
import {User} from '../entity/user'
import {ApiError} from '../middleware/apiError'
import {GenerateTokens} from '../utils/tokens'

export const sessionService = {
	async findSessionByUser(user: User) {
		const sessionRepo = DBDataSource.getRepository(Session)
		return await sessionRepo.findOne({where: {userId: Equal(user.id)}})
	},
	async creatSession(user: User, tokens: ReturnType<GenerateTokens>, sessionExist?: Session) {
		if (user && tokens && sessionExist) {
			sessionExist.refresh_token = tokens.refreshToken
			await DBDataSource.manager.save(sessionExist)
			return sessionExist
		}
		const newSession = new Session()
		newSession.userId = user
		newSession.refresh_token = tokens.refreshToken
		await DBDataSource.manager.save(newSession)
		return newSession

	},
	async deleteSessionByUser(user: User) {
		const sessionRepo = DBDataSource.getRepository(Session)
		const session = await sessionRepo.findOneBy(user)
		if (session) {
			return await DBDataSource.manager.remove(session)

		} else {
			throw new ApiError(httpStatus.NOT_FOUND, 'Session not found')
		}
	},
}