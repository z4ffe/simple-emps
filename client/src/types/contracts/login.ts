import {Roles} from '../roles.ts'

export interface ILogin {
	accessToken: string
	login: string
	role: Roles
}