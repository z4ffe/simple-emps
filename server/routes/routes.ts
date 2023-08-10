import express from 'express'
import {DivisionController} from '../controller/division.controller'
import {EmployeeController} from '../controller/employee.controller'

const router = express.Router()

router.route('/employee')
	.get(EmployeeController.getAllEmployees)
	.post(EmployeeController.addNewEmployee)

router.route('/division')
	.get(DivisionController.getAllDivisions)

export default router