import {Divider, Modal} from 'antd'
import {FC} from 'react'
import {SITE_CONSTANTS} from '../constants/siteConstants.ts'
import {NewEmployeeForm} from './NewEmployeeForm.tsx'

interface Props {
	newEmployeeModal: boolean
	handleNewEmployeeModal: () => void
}

export const NewEmployeeModal: FC<Props> = ({newEmployeeModal, handleNewEmployeeModal}) => {
	return (
		<Modal
			title={<h3 style={{textAlign: 'center', margin: 0}}>{SITE_CONSTANTS.NEW_EMPLOYEE_TITLE}</h3>}
			centered
			width='auto'
			open={newEmployeeModal}
			onCancel={handleNewEmployeeModal}
			footer={null}
		>
			<Divider style={{marginTop: '10px', marginBottom: '20px'}} />
			<NewEmployeeForm />
		</Modal>
	)
}