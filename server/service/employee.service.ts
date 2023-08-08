import {DBDataSource} from '../db'
import {Employee} from '../entity/employee'

export const employeeService = {
	async fetchAllEmployees() {
		const employeeRepository = DBDataSource.getRepository(Employee)
		return employeeRepository.find({relations: ['position', 'division', 'division.division_address', 'division.division_type', 'division.division_address.division_city', 'division.division_address.division_city.region']})
	},
}

