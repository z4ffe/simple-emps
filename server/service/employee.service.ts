import {DBDataSource} from '../config/db'
import {Employee} from '../entity/employee'

export const EmployeeService = {
	async findEmployeeById(id: number) {
		const employeeRepository = DBDataSource.getRepository(Employee)
		return employeeRepository.find({
			where: {
				id,
			},
		})
	},
	async fetchAllEmployees() {
		const employeeRepository = DBDataSource.getRepository(Employee)
		return employeeRepository.find({relations: ['position', 'division', 'division.division_address', 'division.division_type', 'division.division_address.division_city', 'division.division_address.division_city.region']})
	},
	async addNewEmployee(data: any) {
		const {firstName, lastName, middleName, hireDate, division, position} = data
		const newEmployee = new Employee()
		newEmployee.first_name = firstName
		newEmployee.last_name = lastName
		newEmployee.middle_name = middleName
		newEmployee.hire_date = hireDate
		newEmployee.division = division
		newEmployee.position = position
		return await DBDataSource.manager.save(newEmployee)
	},
	async removeEmployeeById(employee: Employee) {
		return DBDataSource.manager.remove(employee)
	},
}

