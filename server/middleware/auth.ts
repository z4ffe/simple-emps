import {NextFunction, Request, Response} from 'express'
import httpStatus from 'http-status'
import {verifyAccessToken} from '../utils/tokens'
import {ApiError} from './apiError'

export const auth = (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req.headers.authorization
		if (!token) {
			throw new ApiError(httpStatus.UNAUTHORIZED, 'Wrong or missed token')
		}
		verifyAccessToken(token)
		return next()
	} catch (error) {
		next(error)
	}
}