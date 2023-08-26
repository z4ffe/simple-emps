import {LoginOutlined, UserAddOutlined} from '@ant-design/icons'
import {Segmented} from 'antd'
import {SegmentedValue} from 'antd/es/segmented'
import {FC, useEffect} from 'react'
import {IAuthModalSwitch} from '../types/AuthTypeSwitch.ts'

interface Props {
	authModal: IAuthModalSwitch
	switchAuthType: (type: IAuthModalSwitch['type']) => void
}

export const AuthSwitcher: FC<Props> = ({switchAuthType, authModal}) => {
	const handleChange = (value: SegmentedValue) => {
		const values = value as IAuthModalSwitch['type']
		switchAuthType(values)
	}

	useEffect(() => {
		console.log('mount', authModal.type)
		return () => console.log('unmount', authModal.type)
	}, [])

	return (
		<Segmented
			onChange={handleChange}
			defaultValue={authModal.type}
			options={[
				{
					icon: (
						<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50px'}} key='Login'>
							<LoginOutlined style={{display: 'block', fontSize: '25px', paddingTop: '10px'}} />
							<div>Login</div>
						</div>
					),
					value: 'login',
				},
				{
					label: (
						<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50px'}} key='Register'>
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