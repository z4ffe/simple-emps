import {createAsyncThunk} from '@reduxjs/toolkit'
import {notification} from 'antd'
import axios, {AxiosResponse} from 'axios'
import {apiInstance} from '../../lib/axios/axiosInstance.ts'
import {LoginSchemaType} from '../../schemas/loginSchema.ts'
import {ILogin} from '../../types/contracts/login.ts'

export const login = createAsyncThunk('user/login', async ({login, password}: LoginSchemaType) => {
	try {
		const response: AxiosResponse<ILogin> = await apiInstance.post('/auth/login', {
			login,
			password,
		}, {
			withCredentials: true,
		})
		return response.data
	} catch (error) {
		console.log(error)
		if (axios.isAxiosError(error)) {
			notification.error({message: error?.response?.data.message, duration: 3})
			throw error
		} else {
			console.error(error)
			throw error
		}
	}
})