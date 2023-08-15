import {AppstoreAddOutlined, BankOutlined, UserAddOutlined} from '@ant-design/icons'
import {FloatButton} from 'antd'
import {FC} from 'react'

interface Props {
	newEmployeeModal: boolean
	handleNewEmployeeModal: () => void
}

export const ControlFloatPanel: FC<Props> = ({handleNewEmployeeModal, newEmployeeModal}) => {
	return (
		<FloatButton.Group shape='circle' style={{right: 60}}>
			<FloatButton tooltip={'Add new Employee'} icon={<UserAddOutlined />} type={newEmployeeModal ? 'primary' : 'default'} onClick={handleNewEmployeeModal} />
			<FloatButton icon={<AppstoreAddOutlined />} tooltip='Add or modify city/region' />
			<FloatButton icon={<BankOutlined />} tooltip='Add or modify division/branch' />
			<FloatButton.BackTop />
		</FloatButton.Group>
	)
}