import {NextFunction, Request, Response} from 'express'
import httpStatus from 'http-status'
import {REFRESH_TOKEN_AGE} from '../config/cookie'
import {ApiError} from '../middleware/apiError'
import {authService} from '../service/auth.service'

export const authController = {
	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const {login, password} = req.body
			const data = await authService.login(login, password)
			res.status(httpStatus.OK).cookie('refresh-token', data.tokens.refreshToken, {maxAge: REFRESH_TOKEN_AGE, httpOnly: true}).json({
				accessToken: data.tokens.accessToken,
				login: data.login,
				role: data.role,
			})
		} catch (error) {
			next(error)
		}
	},
	async logout(req: Request, res: Response, next: NextFunction) {
		const refreshToken = req.cookies['refresh-token']
		if (refreshToken) {
			await authService.removeSession(refreshToken)
		}
		res.status(httpStatus.OK).clearCookie('refresh-token').send({status: 'Logout'})
	},
	async refreshTokens(req: Request, res: Response, next: NextFunction) {
		try {
			const refreshToken = req.cookies['refresh-token']
			const tokens = await authService.refreshAccessToken(refreshToken)
			if (tokens) {
				res.status(httpStatus.OK).cookie('refresh-token', tokens.refreshToken, {maxAge: REFRESH_TOKEN_AGE, httpOnly: true}).json({accessToken: tokens.accessToken})
			} else {
				throw new ApiError(httpStatus.BAD_REQUEST, 'Something went wrong')
			}
		} catch (error) {
			next(error)
		}
	},
}