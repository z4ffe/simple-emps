import {LoginOutlined, UserAddOutlined} from '@ant-design/icons'
import {Segmented} from 'antd'
import {SegmentedValue} from 'antd/es/segmented'
import {FC} from 'react'
import {AuthTypeSwitch} from '../types/AuthTypeSwitch.ts'

interface Props {
	handleAuthType: (value: AuthTypeSwitch) => void
}

export const AuthSwitcher: FC<Props> = ({handleAuthType}) => {
	const handleChange = (value: SegmentedValue) => {
		const values = value as AuthTypeSwitch
		handleAuthType(values)
	}

	return (
		<Segmented
			onChange={handleChange}
			options={[
				{
					icon: (
						<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50px'}}>
							<LoginOutlined style={{display: 'block', fontSize: '25px', paddingTop: '10px'}} />
							<div>Login</div>
						</div>
					),
					value: 'login',
				},
				{
					label: (
						<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50px'}}>
							<UserAddOutlined style={{display: 'block', fontSize: '25px', paddingTop: '10px'}} />
							<div>Register</div>
						</div>
					),
					value: 'reg',
				},
			]}
		/>
	)
}