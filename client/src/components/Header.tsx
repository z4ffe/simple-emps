import {Button, Col, Image, Typography} from 'antd'
import {NavLink} from 'react-router-dom'
import logo from '../assets/images/logo.png'
import {useAppDispatch, useAppSelector} from '../lib/redux/typedHooks.ts'
import {login} from '../store/user/userThunk.ts'
import {nameFormat} from '../utils/nameFormat.ts'

export const Header = () => {
	const isAuth = useAppSelector(state => state.userReducer.isAuth)
	const loginName = useAppSelector(state => state.userReducer.login)
	const dispatch = useAppDispatch()

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
					<Button onClick={() => dispatch(login())}>Log in</Button>
					<Button>Sign up</Button>
				</Col>}
		</div>
	)
}