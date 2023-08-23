import {Button, Col, Image} from 'antd'
import {NavLink} from 'react-router-dom'

import logo from '../assets/images/logo.png'

export const Header = () => {
	return (
		<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1920px', margin: '20px auto'}}>
			<Col>
				<NavLink to='/'>
					<Image src={logo} style={{width: '200px'}} preview={false} />
				</NavLink>
			</Col>
			<Col style={{display: 'flex', gap: '10px'}}>
				<Button>Log in</Button>
				<Button>Sign up</Button>
			</Col>
		</div>
	)
}