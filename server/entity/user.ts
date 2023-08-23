import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
import {Roles} from '../types/roles'


@Entity('user')
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 50, nullable: false})
	login: string

	@Column({length: 100, nullable: false})
	password: string

	@Column({length: 50, nullable: false})
	role: Roles

	@Column({length: 100, nullable: true})
	refresh_token: string
}