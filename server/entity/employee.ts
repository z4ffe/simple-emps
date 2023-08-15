import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {Division} from './division'
import {Position} from './position'

@Entity('employee')
export class Employee {
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 50, nullable: false})
	first_name: string

	@Column({length: 50, nullable: true})
	middle_name: string

	@Column({length: 50, nullable: false})
	last_name: string

	@Column({type: 'date', nullable: false})
	hire_date: Date

	@ManyToOne(() => Position, position => position.id)
	@JoinColumn({name: 'position_id'})
	position: Position

	@ManyToOne(() => Division, division => division.id)
	@JoinColumn({name: 'division_id'})
	division: Division
}