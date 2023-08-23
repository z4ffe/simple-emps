import {NextFunction, Request, Response} from 'express'
import * as httpStatus from 'http-status'
import {userService} from '../service/user.service'

export const userController = {
	async creatNewUser(req: Request, res: Response, next: NextFunction) {
		try {
			const {login, password} = req.body
			const newUser = await userService.createNewUser(login, password)
			res.status(httpStatus.OK).json(newUser)
		} catch (error) {
			next(error)
		}
	},
}