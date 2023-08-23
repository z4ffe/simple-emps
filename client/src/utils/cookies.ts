import cookies from 'js-cookie'
import store from '../store/store.ts'

export const getAccessToken = () => {
	return store.getState().userReducer.accessToken
}

export const getRefreshTokenFromCookies = () => {
	return cookies.get('refresh-token')
}

export const setRefreshTokenToCookies = (token: string) => {
	return cookies.set('refresh-token', token)
}

export const removeRefreshTokenFromCookies = () => {
	return cookies.remove('refresh-token')
}