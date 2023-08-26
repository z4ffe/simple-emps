import {z} from 'zod'

export const registerSchema = z.object({
	login: z.string({required_error: 'Login is required'}).min(4, 'Login is too short').max(50, 'Login is too long'),
	password: z.string({required_error: 'Password is required'}).min(4, 'Password is too short').max(50, 'Password is too long'),
	confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
		message: `Passwords don't match`,
		path: ['confirmPassword'],
	},
)

export type RegisterSchemaType = z.infer<typeof registerSchema>