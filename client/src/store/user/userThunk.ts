import {createAsyncThunk} from '@reduxjs/toolkit'
import {notification} from 'antd'
import {AxiosError, AxiosResponse} from 'axios'
import {apiInstance} from '../../lib/axios/axiosInstance.ts'
import {LoginSchemaType} from '../../schemas/loginSchema.ts'
import {ILogin} from '../../types/contracts/tokens.ts'

export const login = createAsyncThunk('user/login', async ({login, password}: LoginSchemaType) => {
	try {
		const response: AxiosResponse<ILogin> = await apiInstance.post('/auth/login',
			{
				login,
				password,
			})
		return response.data
	} catch (error) {
		if (error instanceof AxiosError) {
			notification.error({message: error?.response?.data.message, duration: 3})
			throw error
		} else {
			console.error(error)
			throw error
		}
	}
})