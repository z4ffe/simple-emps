import * as bcrypt from 'bcrypt'

export const passwordHashing = async (password: string): Promise<string> => {
	const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 12
	return await bcrypt.hash(password, SALT_ROUNDS)
}

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
	return await bcrypt.compare(password, hashedPassword)
}