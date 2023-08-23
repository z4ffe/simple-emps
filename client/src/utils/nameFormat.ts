export const nameFormat = (name: string) => {
	if (name[0] === name[0].toLowerCase()) {
		return name[0].toUpperCase() + name.slice(1)
	}
}