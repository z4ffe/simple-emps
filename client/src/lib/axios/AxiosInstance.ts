import axios from 'axios'
import {CONSTANTS} from '../../constants/constants.ts'

export const apiInstance = axios.create({
	baseURL: CONSTANTS.HOST_URL,
	timeout: 5000,
})