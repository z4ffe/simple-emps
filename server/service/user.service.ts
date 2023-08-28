import httpStatus from 'http-status'
import {DBDataSource} from '../config/db'
import {User} from '../entity/user'
import {ApiError} from '../middleware/apiError'
import {IRegisterBody} from '../types/requests'
import {Roles} from '../types/roles'
import {passwordHashing} from '../utils/passwordHashing'

export const userService = {
	async findUserByLogin(login: string) {
		const userRepo = DBDataSource.getRepository(User)
		return await userRepo.findOneBy({login})
	},
	async createNewUser(data: IRegisterBody) {
		const {login, password, firstName, lastName, gender, birthDate, country, city} = data
		const user = await this.findUserByLogin(login)
		if (user) {
			throw new ApiError(httpStatus.BAD_REQUEST, 'User already exist')
		}
		const hashedPassword = await passwordHashing(password)
		const newUser = new User({
			login,
			password: hashedPassword,
			firstName,
			lastName,
			gender,
			birthDate,
			country,
			city,
			role: Roles.USER,
		})
		return await DBDataSource.manager.save(newUser)
	},
}