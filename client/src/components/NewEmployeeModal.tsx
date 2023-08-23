import {UserAddOutlined} from '@ant-design/icons'
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
			title={<div style={{display: 'flex', alignItems: 'center', width: '100%'}}><UserAddOutlined style={{fontSize: '20px'}} /><h3
				style={{textAlign: 'center', margin: 0, marginLeft: '34%'}}>{SITE_CONSTANTS.NEW_EMPLOYEE_MODAL.TITLE}</h3></div>}
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