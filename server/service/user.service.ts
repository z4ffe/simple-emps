import httpStatus from 'http-status'
import {DBDataSource} from '../config/db'
import {User} from '../entity/user'
import {ApiError} from '../middleware/apiError'
import {Roles} from '../types/roles'
import {passwordHashing, verifyPassword} from '../utils/passwordHashing'
import {generateTokens} from '../utils/tokens'

export const userService = {
	async findUserByLogin(login: string) {
		const userRepo = DBDataSource.getRepository(User)
		return await userRepo.findOneBy({login})
	},
	async createNewUser(login: string, password: string) {
		const user = await this.findUserByLogin(login)
		if (user) {
			throw new ApiError(httpStatus.BAD_REQUEST, 'User already exist')
		}
		const newUser = new User()
		newUser.login = login
		newUser.password = await passwordHashing(password)
		newUser.role = Roles.USER
		return await DBDataSource.manager.save(newUser)
	},
	async login(login: string, password: string) {
		const user = await this.findUserByLogin(login)
		if (!user) {
			throw new ApiError(httpStatus.BAD_REQUEST, 'Wrong login or password')
		}
		const comparePassword = await verifyPassword(password, user.password)
		if (!comparePassword) {
			throw new ApiError(httpStatus.BAD_REQUEST, 'Wrong login or password')
		}
		return generateTokens(login)
	},
}