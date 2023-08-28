import {createAsyncThunk} from '@reduxjs/toolkit'
import {notification} from 'antd'
import {AxiosError, AxiosResponse} from 'axios'
import {LoginSchemaType} from '../../schemas/loginSchema.ts'
import authService from '../../services/authService.ts'
import {ILogin} from '../../types/contracts/login.ts'

export const login = createAsyncThunk('user/login', async ({login, password}: LoginSchemaType) => {
	try {
		const response: AxiosResponse<ILogin> = await authService.login({login, password})
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