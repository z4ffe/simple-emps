import {City} from './city.ts'

export interface Division {
	id: number
	division_name: string
	division_address: DivisionAddress
	division_type: DivisionType
}

export interface DivisionAddress {
	id: number
	division_address: string
	division_city: City
}

export interface DivisionType {
	id: number
	division_type_name: string
}