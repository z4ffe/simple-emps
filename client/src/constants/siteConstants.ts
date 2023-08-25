export const SITE_CONSTANTS = {
	MAIN_TITLE: 'EPMS',
	NEW_EMPLOYEE_MODAL: {
		TITLE: 'New Employee',
	},
	EMPLOYEE_DELETE_MODAL: {
		TITLE: 'Delete Employee',
		TEXT: `Are you sure? This action cannot be undone.`,
		CANCEL_BUTTON: 'Cancel',
		DELETE_BUTTON: 'Delete',
	},
	EMPLOYEE_FORM: {
		FIRST_NAME: 'First name',
		MIDDLE_NAME: 'Middle name',
		LAST_NAME: 'Last name',
	},
	AUTH_FORM: {
		TITLE: (value: string): string => value === 'login' ? 'Login' : value === 'reg' ? 'Register' : '',
		SUBMIT_BUTTON: (value: string): string => value === 'login' ? 'Login' : value === 'reg' ? 'Register' : '',
	},
}