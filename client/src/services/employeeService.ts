import {AxiosResponse} from 'axios'
import {CONSTANTS} from '../constants/constants.ts'
import {apiInstance} from '../lib/axios/axiosInstance.ts'
import {IEmployee} from '../types/employee.ts'

class EmployeeService {
	private readonly EMPLOYEE_PATH

	constructor(path: string) {
		this.EMPLOYEE_PATH = path
	}

	async fetchAllEmployees() {
		const response: AxiosResponse<IEmployee[]> = await apiInstance.get(this.EMPLOYEE_PATH)
		return response.data
	}

	async createNewEmployee(data: unknown) {
		const response: AxiosResponse<IEmployee> = await apiInstance.post(this.EMPLOYEE_PATH, data)
		return response.data
	}
}

export default new EmployeeService(CONSTANTS.EMPLOYEE)