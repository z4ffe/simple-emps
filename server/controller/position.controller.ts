import {NextFunction, Request, Response} from 'express'
import httpStatus from 'http-status'
import {positionService} from '../service/position.service'

export const positionController = {
	async getAllPositions(req: Request, res: Response, next: NextFunction) {
		const allPositions = await positionService.fetchAllPositions()
		res.status(httpStatus.OK).json(allPositions)
	},
}