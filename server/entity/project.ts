import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('project')
export class Project {
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 50, nullable: false})
	project_name: string
}