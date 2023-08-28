import {User} from '../interfaces/user.ts'

export interface ILogin {
	accessToken: string
	user: User
}