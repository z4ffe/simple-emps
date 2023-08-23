import axios from 'axios'
import {API_CONSTANTS} from '../../constants/apiConstants.ts'

export const apiInstance = axios.create({
	baseURL: API_CONSTANTS.HOST_URL,
	timeout: 5000,
	withCredentials: true,
	headers: {
		role: 'admin',
	},
})