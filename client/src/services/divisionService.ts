import {AxiosResponse} from 'axios'
import {API_CONSTANTS} from '../constants/apiConstants.ts'
import {apiInstance} from '../lib/axios/axiosInstance.ts'
import {Division} from '../types/interfaces/division.ts'


class DivisionService {
	private readonly DIVISION_PATH

	constructor(path: string) {
		this.DIVISION_PATH = path
	}

	async fetchAllDivisions() {
		const response: AxiosResponse<Division[]> = await apiInstance.get(this.DIVISION_PATH)
		return response.data
	}
}

export default new DivisionService(API_CONSTANTS.DIVISION)