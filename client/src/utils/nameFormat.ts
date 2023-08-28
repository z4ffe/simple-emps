export const nameFormat = (firstName: string, lastName: string) => {
	const firstNameResult = firstName[0].toUpperCase() + firstName.slice(1)
	const lastNameResult = lastName[0].toUpperCase() + lastName.slice(1)
	return `${firstNameResult} ${lastNameResult}`
}