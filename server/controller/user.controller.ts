import {NextFunction, Request, Response} from 'express'
import {ParamsDictionary} from 'express-serve-static-core'
import * as httpStatus from 'http-status'
import {userService} from '../service/user.service'
import {IRegisterBody} from '../types/requests'

export const userController = {
	async register(req: Request<ParamsDictionary, any, IRegisterBody>, res: Response, next: NextFunction) {
		try {
			const data = req.body
			const newUser = await userService.createNewUser(data)
			res.status(httpStatus.OK).json(newUser)
		} catch (error) {
			next(error)
		}
	},
}