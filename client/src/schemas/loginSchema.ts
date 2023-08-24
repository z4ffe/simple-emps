import {z} from 'zod'

export const loginSchema = z.object({
	login: z.string({required_error: 'Login is required'}).min(4, 'Login is too short').max(50, 'Login is too long'),
	password: z.string({required_error: 'Password is required'}).min(4, 'Password is too short').max(50, 'Password is too long'),
})

export type LoginSchemaType = z.infer<typeof loginSchema>