import {NextFunction, Request, Response} from 'express'
import httpStatus from 'http-status'
import {EmployeeService} from '../service/employee.service'

export const employeeController = {
	async getAllEmployees(req: Request, res: Response, next: NextFunction) {
		const allEmployees = await EmployeeService.fetchAllEmployees()
		if (!allEmployees) {
			return res.status(httpStatus.NOT_FOUND).send('Nothing were found')
		}
		res.status(httpStatus.OK).json(allEmployees)
	},

	async addNewEmployee(req: Request, res: Response, next: NextFunction) {
		const newEmployee = await EmployeeService.addNewEmployee(req.body)
		res.status(httpStatus.OK).json(newEmployee)
	},
}