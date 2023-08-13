import {CONSTANTS} from '../constants/constants.ts'
import {apiInstance} from '../lib/axios/axiosInstance.ts'


class DivisionService {
	private readonly DIVISION_ENDPOINT

	constructor(endpoint: string) {
		this.DIVISION_ENDPOINT = endpoint
	}

	async fetchAllDivisions() {
		const response = await apiInstance.get(this.DIVISION_ENDPOINT)
		return response.data
	}
}

export default new DivisionService(CONSTANTS.DIVISION)