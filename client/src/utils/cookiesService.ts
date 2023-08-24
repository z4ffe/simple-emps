import cookies from 'js-cookie'

export const getRefreshTokenFromCookies = () => {
	return cookies.get('refresh-token')
}

export const setRefreshTokenToCookies = (token: string) => {
	return cookies.set('refresh-token', token)
}

export const removeRefreshTokenFromCookies = () => {
	return cookies.remove('refresh-token')
}