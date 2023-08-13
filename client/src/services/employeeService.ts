import {AxiosResponse} from 'axios'
import {CONSTANTS} from '../constants/constants.ts'
import {apiInstance} from '../lib/axios/AxiosInstance.ts'
import {IEmployee} from '../types/employee.ts'

class EmployeeService {
	private readonly EMPLOYEE_ENDPOINT

	constructor(endpoint: string) {
		this.EMPLOYEE_ENDPOINT = endpoint
	}

	async fetchAllEmployees() {
		const response: AxiosResponse<IEmployee[]> = await apiInstance.get(this.EMPLOYEE_ENDPOINT)
		return response.data
	}

	async createNewEmployee(data: unknown) {
		const response = await apiInstance.post(this.EMPLOYEE_ENDPOINT, data)
		return response.data
	}
}

export default new EmployeeService(CONSTANTS.EMPLOYEE)