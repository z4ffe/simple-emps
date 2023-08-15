import express from 'express'
import {divisionController} from '../controller/divisionController'
import {employeeController} from '../controller/employeeController'
import {positionController} from '../controller/position.controller'

const router = express.Router()

router.route('/employee')
	.get(employeeController.getAllEmployees)
	.post(employeeController.addNewEmployee)

router.route('/employee/:id')
	.delete(employeeController.deleteEmployeeById)

router.route('/division')
	.get(divisionController.getAllDivisions)

router.route('/position')
	.get(positionController.getAllPositions)

export default router