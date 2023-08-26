export const API_CONSTANTS = {
	HOST_URL: 'http://localhost:5005',
	EMPLOYEE: 'employee',
	DIVISION: 'division',
	POSITION: 'position',
	AUTH: {
		LOGIN: '/auth/login',
		REFRESH: '/auth/refresh',
		LOGOUT: '/auth/logout',
	},
}

export type ApiConstantsType = typeof API_CONSTANTS