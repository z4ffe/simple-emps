import express from 'express'
import {EmployeeController} from '../controller/employee.controller'
const router = express.Router()

router.route('/employee')
	.get(EmployeeController.getAllEmployees)

export default router