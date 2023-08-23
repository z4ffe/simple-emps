declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: string;
			NODE_ENV: 'development' | 'production';
			DB_HOST: string
			DB_USER: string
			DB_PASSWORD: string
			DB_NAME: string
			SALT_ROUNDS: string
			JWT_ACCESS_TOKEN_SECRET: string
			JWT_REFRESH_TOKEN_SECRET: string
		}
	}
}

export {}