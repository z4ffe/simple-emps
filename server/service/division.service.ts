import {DBDataSource} from '../db'
import {Division} from '../entity/division'

export const DivisionService = {
	async fetchAllDivisions() {
		const divisionRepository = DBDataSource.getRepository(Division)
		return divisionRepository.find()
	},
}