import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {Employee} from './employee'
import {Project} from './project'

@Entity('project_assignment')
export class ProjectAssignment {
	@PrimaryGeneratedColumn()
	id: number

	@ManyToOne(() => Project, project => project.id)
	@JoinColumn({name: 'project_id'})
	project: Project

	@ManyToOne(() => Employee, employee => employee.id)
	@JoinColumn({name: 'employee_id'})
	employee: Employee
}