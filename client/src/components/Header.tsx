import {LoginOutlined} from '@ant-design/icons'
import {Button, Col, Image, Typography} from 'antd'
import {SyntheticEvent, useState} from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import {useAppSelector} from '../lib/redux/typedHooks.ts'
import {IAuthModalSwitch} from '../types/AuthTypeSwitch.ts'
import {nameFormat} from '../utils/nameFormat.ts'
import {AuthModal} from './AuthModal.tsx'

export const Header = () => {
	const isAuth = useAppSelector(state => state.user.isAuth)
	const loginName = useAppSelector(state => state.user.login)
	const [authModal, setAuthModal] = useState<IAuthModalSwitch>({status: false, type: 'login'})

	const openAuthModal = (event: SyntheticEvent) => {
		if (!event.currentTarget.getAttribute('data-type')) return
		const type = event.currentTarget.getAttribute('data-type') as IAuthModalSwitch['type']
		return setAuthModal({status: true, type})
	}

	const closeAuthModal = () => {
		setAuthModal(prevState => {
			return {...prevState, status: false}
		})
	}

	const switchAuthType = (type: IAuthModalSwitch['type']) => {
		if (!type) return
		setAuthModal(prevState => {
			return {...prevState, type: type}
		})
	}

	return (
		<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1920px', margin: '20px auto'}}>
			<Col>
				<NavLink to='/'>
					<Image src={logo} style={{width: '200px'}} preview={false} />
				</NavLink>
			</Col>
			{isAuth ?
				<Col style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
					<Typography style={{fontWeight: '500', fontSize: '1rem'}}>Hello, {nameFormat(loginName)}</Typography>
					<Button icon={<LoginOutlined />} style={{fontWeight: '500'}}>Log out</Button>
				</Col>
				:
				<Col style={{display: 'flex', gap: '10px'}}>
					<Button onClick={(event) => openAuthModal(event)} data-type='login'>Log in</Button>
					<Button onClick={(event) => openAuthModal(event)} data-type='reg'>Register</Button>
				</Col>}
			<AuthModal authModal={authModal} closeAuthModal={closeAuthModal} switchAuthType={switchAuthType} />
		</div>
	)
}