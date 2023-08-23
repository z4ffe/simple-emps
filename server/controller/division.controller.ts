import {NextFunction, Request, Response} from 'express'
import httpStatus from 'http-status'
import {DivisionService} from '../service/division.service'

export const divisionController = {
	async getAllDivisions(req: Request, res: Response, next: NextFunction) {
		const allDivisions = await DivisionService.fetchAllDivisions()
		res.status(httpStatus.OK).json(allDivisions)
	},
}