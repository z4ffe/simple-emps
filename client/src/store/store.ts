import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist'
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist/es/constants'
import storage from 'redux-persist/es/storage'
import {injectStore} from '../lib/axios/axiosInstance.ts'
import {userReducer} from './user/userSlice.ts'

const rootReducer = combineReducers({
	user: userReducer,
})

//

const persistConfig = {
	key: 'staffflow',
	storage,
	whitelist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

//

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export default store
injectStore(store)
