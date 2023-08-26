import {AxiosResponse} from 'axios'
import {API_CONSTANTS, ApiConstantsType} from '../constants/apiConstants.ts'
import {apiInstance} from '../lib/axios/axiosInstance.ts'
import {LoginSchemaType} from '../schemas/loginSchema.ts'
import {ILogin} from '../types/contracts/login.ts'


class AuthService {
	private readonly AUTH_PATH

	constructor(path: ApiConstantsType['AUTH']) {
		this.AUTH_PATH = path
	}

	async login({login, password}: LoginSchemaType): Promise<AxiosResponse<ILogin>> {
		return await apiInstance.post(this.AUTH_PATH.LOGIN, {
			login,
			password,
		}, {
			withCredentials: true,
		})
	}

	async refreshToken(): Promise<AxiosResponse<Pick<ILogin, 'accessToken'>>> {
		return await apiInstance.get(this.AUTH_PATH.REFRESH, {
			withCredentials: true,
		})
	}

	async logout(): Promise<void> {
		return await apiInstance.get(this.AUTH_PATH.LOGOUT, {
			withCredentials: true,
		})
	}
}

export default new AuthService(API_CONSTANTS.AUTH)