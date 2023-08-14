import {DBDataSource} from '../db'
import {Position} from '../entity/position'

export const positionService = {
	async fetchAllPositions() {
		const allPositions = DBDataSource.getRepository(Position)
		return allPositions.find({})
	},
}