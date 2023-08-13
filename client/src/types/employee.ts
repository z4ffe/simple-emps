export interface IEmployee {
	id: number
	first_name: string
	middle_name: string
	last_name: string
	hire_date: Date
	position: Position
	division: Division
}

export interface Division {
	id: number
	division_name: string
	division_address: DivisionAddress
	division_type: DivisionType
}

export interface DivisionAddress {
	id: number
	division_address: string
	division_city: DivisionCity
}

export interface DivisionCity {
	id: number
	city_name: string
	region: Region
}

export interface Region {
	id: number
	region_name: string
}

export interface DivisionType {
	id: number
	division_type_name: string
}

export interface Position {
	id: number
	position_name: string
	salary: number
}
