import {AxiosResponse} from 'axios'
import {API_CONSTANTS} from '../constants/apiConstants.ts'
import {apiInstance} from '../lib/axios/axiosInstance.ts'
import {NewEmployeeSchemaType} from '../schemas/newEmployeeSchema.ts'
import {IEmployee} from '../types/interfaces/employee.ts'
import {getAccessToken} from '../utils/reduxService.ts'

class EmployeeService {
	private readonly EMPLOYEE_PATH

	constructor(path: string) {
		this.EMPLOYEE_PATH = path
	}

	async fetchAllEmployees() {
		const response: AxiosResponse<IEmployee[]> = await apiInstance.get(this.EMPLOYEE_PATH)
		return response.data
	}

	async createNewEmployee(data: NewEmployeeSchemaType): Promise<IEmployee> {
		const response: AxiosResponse<IEmployee> = await apiInstance.post(this.EMPLOYEE_PATH, data, {
			headers: {
				'Authorization': `Bearer ${getAccessToken()}`,
			},
		})
		return response.data
	}

	async deleteEmployeeById(id: number | null): Promise<IEmployee | Error> {
		if (!id) {
			throw new Error()
		}
		const response: AxiosResponse<IEmployee> = await apiInstance.delete(`${this.EMPLOYEE_PATH}/${id}`, {
			headers: {
				'Authorization': `Bearer ${getAccessToken()}`,
			},
		})
		return response.data
	}
}

export default new EmployeeService(API_CONSTANTS.EMPLOYEE)