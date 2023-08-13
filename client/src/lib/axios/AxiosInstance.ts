import axios from 'axios'
import {HOST_URL} from '../../constants/constants.ts'

export const apiInstance = axios.create({
	baseURL: HOST_URL,
	timeout: 5000,
})