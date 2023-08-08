import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('region')
export class Region {
	@PrimaryGeneratedColumn()
	id: number

	@Column({
		length: 50,
		nullable: false
	})

	region_name: string
}