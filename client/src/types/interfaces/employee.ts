import {Division} from './division.ts'
import {Position} from './position.ts'

export interface IEmployee {
	id: number
	first_name: string
	middle_name: string
	last_name: string
	hire_date: Date
	position: Position
	division: Division
}



