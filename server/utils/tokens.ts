import * as jwt from 'jsonwebtoken'
import {ACCESS_TOKEN_AGE, REFRESH_TOKEN_AGE} from '../config/cookie'

type GenerateTokens = (login: string) => {accessToken: string, refreshToken: string}

//

const ACCESS_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET
const REFRESH_SECRET = process.env.JWT_REFRESH_TOKEN_SECRET

//

export const generateTokens: GenerateTokens = (login) => {
	const accessToken = jwt.sign({login}, `${ACCESS_SECRET}`, {expiresIn: ACCESS_TOKEN_AGE})
	const refreshToken = jwt.sign({login}, `${REFRESH_SECRET}`, {expiresIn: REFRESH_TOKEN_AGE})
	return {accessToken, refreshToken}
}