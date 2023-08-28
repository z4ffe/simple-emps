export interface IRegisterBody {
	login: string
	password: string
	firstName: string
	lastName: string
	gender: 'male' | 'female' | 'other'
	birthDate: Date
	country: string
	city: string
}
