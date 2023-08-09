import axios from 'axios'

const BASE_URL = 'http://localhost:5005'

export const ApiInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
})