import {AxiosResponse} from 'axios'
import {IEmployee} from '../../types/employee.ts'
import {ApiInstance} from '../lib/axios/AxiosInstance.ts'

class EmployeeService {
	private EMPLOYEE_ENDPOINT = '/employee'

	async fetchAllEmployees() {
		const response: AxiosResponse<IEmployee[]> = await ApiInstance.get(this.EMPLOYEE_ENDPOINT)
		return response.data
	}

	async createNewEmployee(data: unknown) {
		const response = await ApiInstance.post(this.EMPLOYEE_ENDPOINT, data)
		return response.data
	}
}

export default new EmployeeService()