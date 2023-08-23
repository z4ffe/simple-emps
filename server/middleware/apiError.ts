import {NextFunction, Request, Response} from 'express'
import httpStatus from 'http-status'

export class ApiError extends Error {
	public statusCode: number

	constructor(statusCode: number, message: string) {
		super()
		this.statusCode = statusCode
		this.message = message
	}
}

export const handleError = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
	let error = err
	if (!(error instanceof ApiError)) {
		const statusCode = err.statusCode ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR
		const message = err.message || httpStatus[statusCode].toString()
		error = new ApiError(statusCode, message)
	}
	res.status(error.statusCode).json({statusCode: error.statusCode, message: error.message})
}