import {Button, Col, Image, Typography} from 'antd'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import {useAppSelector} from '../lib/redux/typedHooks.ts'
import {nameFormat} from '../utils/nameFormat.ts'
import {AuthModal} from './AuthModal.tsx'

export const Header = () => {
	const isAuth = useAppSelector(state => state.user.isAuth)
	const loginName = useAppSelector(state => state.user.login)
	const [loginModal, setLoginModal] = useState(false)

	const openLoginModal = () => setLoginModal(true)
	const closeLoginModal = () => setLoginModal(false)

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
					<Button>Log out</Button>
				</Col>
				:
				<Col style={{display: 'flex', gap: '10px'}}>
					<Button onClick={openLoginModal}>Log in</Button>
					<Button>Sign up</Button>
				</Col>}
			<AuthModal loginModal={loginModal} closeLoginModal={closeLoginModal} />
		</div>
	)
}