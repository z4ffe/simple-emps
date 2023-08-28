import {Roles} from '../roles.ts'

export interface User {
	id: number,
	login: string
	password: string
	firstName: string
	lastName: string
	gender: string
	birthDate: Date
	country: string
	city: string
	role: Roles
	createdAt: Date
	updatedAt: Date
}
