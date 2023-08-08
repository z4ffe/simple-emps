import {NextFunction, Request, Response} from 'express'
import httpStatus from 'http-status'
import {employeeService} from '../service/employee.service'

export const EmployeeController = {
	async getAllEmployees(req: Request, res: Response, next: NextFunction) {
		const allEmployees = await employeeService.fetchAllEmployees()
		if (!allEmployees) {
			return res.status(httpStatus.NOT_FOUND).send('Nothing were found')
		}
		res.status(httpStatus.OK).json(allEmployees)
	}
}