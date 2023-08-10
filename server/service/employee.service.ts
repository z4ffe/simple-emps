import {DBDataSource} from '../db'
import {Employee} from '../entity/employee'

export const EmployeeService = {
	async fetchAllEmployees() {
		const employeeRepository = DBDataSource.getRepository(Employee)
		return employeeRepository.find({relations: ['position', 'division', 'division.division_address', 'division.division_type', 'division.division_address.division_city', 'division.division_address.division_city.region']})
	},

	async addNewEmployee(data: any) {
		const {first_name, last_name, middle_name, hire_date, division, position} = data
		const newEmployee = new Employee()
		newEmployee.first_name = first_name
		newEmployee.last_name = last_name
		newEmployee.middle_name = middle_name
		newEmployee.hire_date = hire_date
		newEmployee.division = division
		newEmployee.position = position
		return await DBDataSource.manager.save(newEmployee)
	},
}

