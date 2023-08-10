import {AppstoreAddOutlined, BankOutlined, UserAddOutlined} from '@ant-design/icons'
import {FloatButton} from 'antd'
import {FC} from 'react'

interface Props {
	handler: () => void
	modalStatus: boolean
}

export const AddButton: FC<Props> = ({handler, modalStatus}) => {
	return (
		<FloatButton.Group shape='square' style={{right: 84}}>
			<FloatButton tooltip={'Add new Employee'} icon={<UserAddOutlined />} type={!modalStatus ? 'primary' : 'default'} onClick={handler} />
			<FloatButton icon={<AppstoreAddOutlined />} tooltip='Add or modify city/region' />
			<FloatButton icon={<BankOutlined />} tooltip='Add or modify division/branch' />
			<FloatButton.BackTop visibilityHeight={0} tooltip='Scroll top' />
		</FloatButton.Group>
	)
}