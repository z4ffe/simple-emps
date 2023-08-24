import {createSlice} from '@reduxjs/toolkit'
import {Roles} from '../../types/roles.ts'
import {login} from './userThunk.ts'

export interface IUserSliceState {
	login: string
	accessToken: string
	isAuth: boolean
	role: Roles | null
	loading: boolean
}

const initialState: IUserSliceState = {
	login: '',
	accessToken: '',
	isAuth: false,
	role: null,
	loading: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setAccessToken: (state, action) => {
			state.accessToken = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(login.pending, (state) => {
			state.isAuth = false
			state.loading = true
		})
		builder.addCase(login.fulfilled, (state, action) => {
			if (action.payload) {
				state.login = action.payload.login
				state.accessToken = action.payload.accessToken
				state.role = action.payload.role
				state.isAuth = true
				state.loading = false
			}
		})
		builder.addCase(login.rejected, () => {
			return initialState
		})
	},
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions