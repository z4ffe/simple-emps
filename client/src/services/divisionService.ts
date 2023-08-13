import {apiInstance} from '../lib/axios/AxiosInstance.ts'

class DivisionService {
	private DIVISION_ENDPOINT = '/division'

	async fetchAllDivisions() {
		const response = await apiInstance.get(this.DIVISION_ENDPOINT)
		return response.data
	}
}

export default new DivisionService()