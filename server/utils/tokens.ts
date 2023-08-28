import httpStatus from 'http-status'
import * as jwt from 'jsonwebtoken'
import {ACCESS_TOKEN_AGE, REFRESH_TOKEN_AGE} from '../config/cookie'
import {ApiError} from '../middleware/apiError'
import {Roles} from '../types/roles'

export interface DecodedJWTToken {
	login: string
	role: Roles
	iat: number
	exp: number
}

export type GenerateTokens = (login: string, role: Roles) => {accessToken: string, refreshToken: string}

//

const ACCESS_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET
const REFRESH_SECRET = process.env.JWT_REFRESH_TOKEN_SECRET

//

export const generateTokens: GenerateTokens = (login, role) => {
	const tokenPayload = {
		login,
		role,
	}
	const accessToken = jwt.sign(tokenPayload, `${ACCESS_SECRET}`, {expiresIn: ACCESS_TOKEN_AGE})
	const refreshToken = jwt.sign(tokenPayload, `${REFRESH_SECRET}`, {expiresIn: REFRESH_TOKEN_AGE})
	return {accessToken, refreshToken}
}

export const verifyAccessToken = (token: string) => {
	try {
		const accessToken = token.split(' ')[1]
		return jwt.verify(accessToken, `${ACCESS_SECRET}`)
	} catch (error) {
		throw new ApiError(httpStatus.UNAUTHORIZED, 'Wrong access token')
	}
}
export const verifyRefreshToken = (token: string) => {
	try {
		const refreshToken = token.split(' ')[1]
		return jwt.verify(refreshToken, `${REFRESH_SECRET}`)
	} catch (error) {
		throw new ApiError(httpStatus.UNAUTHORIZED, 'Wrong refresh token')
	}
}

export const refreshAccessToken = (token: string) => {
	try {
		//
	} catch (error) {
		throw new ApiError(httpStatus.UNAUTHORIZED, 'Wrong refresh token')
	}
}