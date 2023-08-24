import {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore'
import axios, {AxiosError, InternalAxiosRequestConfig} from 'axios'
import {API_CONSTANTS} from '../../constants/apiConstants.ts'
import authService from '../../services/authService.ts'
import {userActions} from '../../store/user/userSlice.ts'

let store: ToolkitStore

export const injectStore = (_store: ToolkitStore): void => {
	store = _store
}

export const apiInstance = axios.create({
	baseURL: API_CONSTANTS.HOST_URL,
	timeout: 5000,
	withCredentials: false,
})

interface CustomInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
	__isRetry?: boolean
}

apiInstance.interceptors.response.use(
	(config) => config,
	async (error: AxiosError) => {
		const originalRequest = error.config as CustomInternalAxiosRequestConfig
		if (error.response!.status === 401 && error.config && !originalRequest.__isRetry) {
			originalRequest.__isRetry = true
			try {
				const response = await authService.refreshToken()
				const {accessToken} = response.data
				store.dispatch(userActions.setAccessToken(accessToken))
				originalRequest.headers.authorization = `Bearer ${accessToken}`
				return apiInstance.request(originalRequest)
			} catch (error) {
				throw new AxiosError('Unauthorized', '400')
			}
		}
	})
