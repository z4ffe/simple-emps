import {DataSource} from 'typeorm'
import {City} from '../entity/city'
import {Division} from '../entity/division'
import {DivisionAddress} from '../entity/divisionAddress'
import {DivisionType} from '../entity/divisionType'
import {Employee} from '../entity/employee'
import {Position} from '../entity/position'
import {Project} from '../entity/project'
import {ProjectAssignment} from '../entity/projectAssignment'
import {Region} from '../entity/region'
import {User} from '../entity/user'

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

export const DBDataSource = new DataSource({
	type: 'postgres',
	host: DB_HOST,
	username: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
	ssl: true,
	entities: [Region, City, DivisionType, Division, DivisionAddress, Position, Project, Employee, ProjectAssignment, User],
	synchronize: true,
	logging: false,
})