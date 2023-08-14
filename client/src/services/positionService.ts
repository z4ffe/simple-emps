import {CONSTANTS} from '../constants/constants.ts'

class PositionService {
	private readonly EMPLOYEE_PATH

	constructor(path: string) {
		this.EMPLOYEE_PATH = path
	}
}

export default new PositionService(CONSTANTS.)