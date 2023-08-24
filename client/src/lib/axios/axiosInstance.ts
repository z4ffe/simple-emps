import axios from 'axios'
import {API_CONSTANTS} from '../../constants/apiConstants.ts'

export const apiInstance = axios.create({
	baseURL: API_CONSTANTS.HOST_URL,
	timeout: 5000,
	withCredentials: true,
})


/* apiInstance.interceptors.response.use(
	(config) => config,
	async (error: AxiosError) => {
		const originalRequest = error.config
		try {
			if (error.response!.status === 401 && error.config && originalRequest._isRetry) {
				const response = await apiInstance.get('/auth/refresh')
				console.log(response.data)
			}
		} catch (error) {
			throw new AxiosError('Unauthorized', '401')
		}
	}) */
