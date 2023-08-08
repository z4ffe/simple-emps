import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {Region} from './region'

@Entity('city')
export class City {
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 50, nullable: true})
	city_name: string

	@ManyToOne(() => Region, region => region.id)
	@JoinColumn({ name: "region_id" })
	region: Region
}