import httpStatus from 'http-status'
import {DBDataSource} from '../config/db'
import {Session} from '../entity/session'
import {User} from '../entity/user'
import {ApiError} from '../middleware/apiError'

export const sessionService = {
	async findSessionByUser(user: User) {
		const sessionRepo = DBDataSource.getRepository(Session)
		return await sessionRepo.findOneBy({userId: user})
	},
	async deleteSessionByUser(user: User) {
		const sessionRepo = DBDataSource.getRepository(Session)
		const session = await sessionRepo.findOneBy(user)
		if (session) {
			return await DBDataSource.manager.remove(session)

		} else {
			throw new ApiError(httpStatus.NOT_FOUND, 'Session not found')
		}
	},
}