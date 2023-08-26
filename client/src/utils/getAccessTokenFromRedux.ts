import store from '../store/store.ts'

export const getAccessToken = () => {
	return store.getState().user.accessToken
}