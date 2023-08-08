import {DataSource} from 'typeorm'
import {City} from './entity/city'
import {Division} from './entity/division'
import {DivisionAddress} from './entity/divisionAddress'
import {DivisionType} from './entity/divisionType'
import {Employee} from './entity/employee'
import {Position} from './entity/position'
import {Project} from './entity/project'
import {ProjectAssignment} from './entity/projectAssignment'
import {Region} from './entity/region'

export const DBDataSource = new DataSource({
	type: 'postgres',
	host: 'ep-orange-bird-24775976.eu-central-1.aws.neon.tech',
	username: 'z4ffe',
	password: 'xODFMNKm72vc',
	database: 'test',
	ssl: true,
	entities: [Region, City, DivisionType, Division, DivisionAddress, Position, Project, Employee, ProjectAssignment],
	synchronize: true,
})