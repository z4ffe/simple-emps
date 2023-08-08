import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('position')
export class Position {
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 100, nullable: false})
	position_name: string

	@Column({nullable: false})
	salary: number
}