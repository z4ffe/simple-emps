import {AxiosResponse} from 'axios'
import {API_CONSTANTS} from '../constants/apiConstants.ts'
import {apiInstance} from '../lib/axios/axiosInstance.ts'
import {LoginSchemaType} from '../schemas/loginSchema.ts'
import {ILogin} from '../types/contracts/login.ts'


class AuthService {
	private readonly AUTH_PATH

	constructor(path: {LOGIN: string, REFRESH: string}) {
		this.AUTH_PATH = path
	}

	async login({login, password}: LoginSchemaType): Promise<AxiosResponse<ILogin>> {
		try {
			return apiInstance.post(this.AUTH_PATH.LOGIN, {
				login,
				password,
			}, {
				withCredentials: true,
			})
		} catch (error) {
			throw error
		}
	}

	async refreshToken(): Promise<AxiosResponse<Pick<ILogin, 'accessToken'>>> {
		return await apiInstance.get(this.AUTH_PATH.REFRESH, {
			withCredentials: true,
		})
	}
}

export default new AuthService(API_CONSTANTS.AUTH)