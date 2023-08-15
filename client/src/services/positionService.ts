import {API_CONSTANTS} from '../constants/apiConstants.ts'
import {apiInstance} from '../lib/axios/axiosInstance.ts'
import {Position} from '../types/interfaces/position.ts'


class PositionService {
	private readonly EMPLOYEE_PATH

	constructor(path: string) {
		this.EMPLOYEE_PATH = path
	}

	async fetchAllPositions(): Promise<Position[]> {
		const response = await apiInstance.get(this.EMPLOYEE_PATH)
		return response.data
	}
}

export default new PositionService(API_CONSTANTS.POSITION)