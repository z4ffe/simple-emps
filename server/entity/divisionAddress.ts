import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {City} from './city'

@Entity('division_address')
export class DivisionAddress {
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 100, nullable: false})
	division_address: string

	@ManyToOne(() => City, city => city.id)
	@JoinColumn({name: 'division_city_id'})
	division_city: City
}