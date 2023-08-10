import {z} from 'zod'

export const newEmployeeSchema = z.object({
	firstName: z.string().min(2, 'Name is too short').max(50, 'Name is too long'),
	middleName: z.string().min(2, 'Name is too short').max(50, 'Name is too long'),
	lastName: z.string().min(2, 'Name is too short').max(50, 'Name is too long'),
	hireDate: z.any(),
	position: z.number(),
	division: z.number(),
})

export type NewEmployeeSchemaType = z.infer<typeof newEmployeeSchema>