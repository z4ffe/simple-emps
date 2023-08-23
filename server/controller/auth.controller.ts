import {NextFunction, Request, Response} from 'express'
import httpStatus from 'http-status'
import {REFRESH_TOKEN_AGE} from '../config/cookie'
import {userService} from '../service/user.service'

export const authController = {
	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const {login, password} = req.body
			const tokens = await userService.login(login, password)
			console.log(REFRESH_TOKEN_AGE)
			res.status(httpStatus.OK).cookie('refresh-token', tokens.refreshToken, {maxAge: REFRESH_TOKEN_AGE}).json({accessToken: tokens.accessToken})
		} catch (error) {
			next(error)
		}
	},
}