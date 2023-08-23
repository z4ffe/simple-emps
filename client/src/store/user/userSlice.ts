import {createSlice} from '@reduxjs/toolkit'
import {Roles} from '../../types/roles.ts'

export interface IUserSliceState {
	login: string
	refreshToken: string
	role: Roles | null
}

const initialState: IUserSliceState = {
	login: '',
	refreshToken: '',
	role: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {},
	extraReducers: {},
})

export const userReducer = userSlice.reducer