import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
import {Roles} from '../types/roles'


@Entity('user')
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 50, nullable: false})
	login: string

	@Column({length: 100, nullable: false})
	password: string

	@Column({name: 'first_name', length: 50, nullable: false})
	firstName: string

	@Column({name: 'last_name', length: 50, nullable: false})
	lastName: string

	@Column({length: 50, nullable: false})
	gender: 'male' | 'female' | 'other'

	@Column({name: 'birth_date', nullable: false})
	birthDate: Date

	@Column({nullable: false})
	country: string

	@Column({nullable: false})
	city: string

	@Column({length: 50, nullable: false, default: Roles.USER})
	role: Roles

	@CreateDateColumn({name: 'created_at'})
	createdAt: Date

	@UpdateDateColumn({name: 'updated_at'})
	updatedAt: Date

	constructor(entity?: Partial<User>) {
		if (entity) {
			Object.assign(this, entity)
		}
	}
}