import {createAsyncThunk} from '@reduxjs/toolkit'
import {AxiosResponse} from 'axios'
import {apiInstance} from '../../lib/axios/axiosInstance.ts'
import {ILogin} from '../../types/contracts/tokens.ts'

export const login = createAsyncThunk('user/login', async () => {
	try {
		const response: AxiosResponse<ILogin> = await apiInstance.post('/auth/login',
			{
				login: 'nasa',
				password: '1337',
			})
		return response.data
	} catch (error) {
		console.log(error)
	}
})