import {createLogger, format, transports} from 'winston'

export const logger = createLogger({
	// level: 'info',
	defaultMeta: {service: 'StaffFlow'},
	transports: [
		new transports.Console(),
		new transports.File({filename: 'error.log', level: 'error'}),
		new transports.File({filename: 'warns.log', level: 'warn'}),
		new transports.File({filename: 'combined.log'}),
	], format: format.combine(
		format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss',
		}),
		format.errors({stack: true}),
		format.splat(),
		format.json(),
		format.prettyPrint(),
	),
})
