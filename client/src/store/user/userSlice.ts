import {createSlice} from '@reduxjs/toolkit'
import {User} from '../../types/interfaces/user.ts'
import {login} from './userThunk.ts'

export interface IUserSliceState {
	accessToken: string
	user: User | null
	isAuth: boolean
	loading: boolean
}

const initialState: IUserSliceState = {
	accessToken: '',
	user: null,
	isAuth: false,
	loading: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setAccessToken: (state, action) => {
			state.accessToken = action.payload
		},
		logout: () => {
			return initialState
		},
	},
	extraReducers: builder => {
		builder.addCase(login.pending, (state) => {
			state.isAuth = false
			state.loading = true
		})
		builder.addCase(login.fulfilled, (state, action) => {
			if (action.payload) {
				state.accessToken = action.payload.accessToken
				state.user = action.payload.user
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