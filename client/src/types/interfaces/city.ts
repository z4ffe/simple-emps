import {Region} from './region.ts'

export interface City {
	id: number
	city_name: string
	region: Region
}