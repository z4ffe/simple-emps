import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {DivisionAddress} from './divisionAddress'
import {DivisionType} from './divisionType'

@Entity('division')
export class Division {
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 50, nullable: true})
	division_name: string

	@ManyToOne(() => DivisionType, divisionType => divisionType.id)
	@JoinColumn({name: 'division_type_id'})
	division_type: DivisionType

	@ManyToOne(() => DivisionAddress, divisionAddress => divisionAddress.id)
	@JoinColumn({name: 'division_address_id'})
	division_address: DivisionAddress
}