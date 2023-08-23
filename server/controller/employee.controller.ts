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
	async deleteEmployeeById(req: Request, res: Response, next: NextFunction) {
		const {id} = req.params
		if (!id || isNaN(Number(id))) {
			return res.status(httpStatus.NOT_FOUND).json({message: 'Error'})
		}
		const employee = await EmployeeService.findEmployeeById(Number(id))
		if (!employee.length) {
			return res.status(httpStatus.NOT_FOUND).json({message: 'User not found'})
		}
		const removedEmployee = await EmployeeService.removeEmployeeById(employee[0])
		res.status(httpStatus.OK).json(removedEmployee)
	},
}