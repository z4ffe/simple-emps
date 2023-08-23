import express from 'express'
import {authController} from '../controller/auth.controller'
import {divisionController} from '../controller/division.controller'
import {employeeController} from '../controller/employee.controller'
import {positionController} from '../controller/position.controller'
import {userController} from '../controller/user.controller'
import {auth} from '../middleware/auth'

const router = express.Router()

router.route('/employee')
	.get(auth, employeeController.getAllEmployees)
	.post(employeeController.addNewEmployee)

router.route('/employee/:id')
	.delete(employeeController.deleteEmployeeById)

router.route('/division')
	.get(divisionController.getAllDivisions)

router.route('/position')
	.get(positionController.getAllPositions)

router.route('/user')
	.post(userController.creatNewUser)

router.route('/login')
	.post(authController.login)

export default router