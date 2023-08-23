import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import {User} from './user'

@Entity('session')
export class Session {
	@PrimaryGeneratedColumn()
	id: number

	@OneToOne(() => User)
	@JoinColumn({name: 'user_id'})
	userId: User

	@Column({length: 200, nullable: false})
	refresh_token: string
}