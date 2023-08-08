import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('division_type')
export class DivisionType {
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 50, nullable: false})
	division_type_name: string
}