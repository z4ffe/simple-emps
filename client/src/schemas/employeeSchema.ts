import * as dayjs from 'dayjs'
import {z} from 'zod'

export const employeeSchema = z.object({
	firstName: z.string({required_error: 'First name is required'}).min(2, 'Name is too short').max(50, 'Name is too long'),
	middleName: z.string({required_error: 'Middle name is required'}).min(2, 'Name is too short').max(50, 'Name is too long').optional(),
	lastName: z.string({required_error: 'Last name is required'}).min(2, 'Name is too short').max(50, 'Name is too long'),
	position: z.number({required_error: 'Position is required'}),
	division: z.number({required_error: 'Division is required'}),
	hireDate: z.custom((value) => dayjs.isDayjs(value), 'Hire date is required'),
	project: z.number().optional(),
})

export type NewEmployeeSchemaType = z.infer<typeof employeeSchema>