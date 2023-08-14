import {CONSTANTS} from '../constants/constants.ts'
import {apiInstance} from '../lib/axios/axiosInstance.ts'


class DivisionService {
	private readonly DIVISION_PATH

	constructor(path: string) {
		this.DIVISION_PATH = path
	}

	async fetchAllDivisions() {
		const response = await apiInstance.get(this.DIVISION_PATH)
		return response.data
	}
}

export default new DivisionService(CONSTANTS.DIVISION)