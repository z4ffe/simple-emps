import {Button, Form, Modal, Space} from 'antd'
import {FC, useState} from 'react'
import {SITE_CONSTANTS} from '../constants/siteConstants.ts'
import {AuthTypeSwitch} from '../types/AuthTypeSwitch.ts'
import {AuthForm} from './AuthForm.tsx'
import {AuthSwitcher} from './AuthSwitcher.tsx'

interface Props {
	loginModal: boolean
	closeLoginModal: () => void
}

export const AuthModal: FC<Props> = ({loginModal, closeLoginModal}) => {
	const [authType, setAuthType] = useState<AuthTypeSwitch>('login')
	const [form] = Form.useForm()
	const [formLoading, setFormLoading] = useState(false)

	const handleForm = () => form.submit()
	const handleFormLoading = (value: boolean) => setFormLoading(value)

	const handleAuthType = (value: AuthTypeSwitch) => setAuthType(value)

	return (
		<Modal
			centered
			title={<h1 style={{textAlign: 'center', margin: '0 auto 20px', fontSize: '1.2rem'}}>{SITE_CONSTANTS.AUTH_FORM.TITLE(authType)}</h1>}
			open={loginModal}
			onCancel={closeLoginModal}
			footer={[
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<Button key='back' onClick={closeLoginModal}>
						Cancel
					</Button>
					<Button key='submit' type='primary' loading={formLoading} onClick={handleForm}>
						{SITE_CONSTANTS.AUTH_FORM.SUBMIT_BUTTON(authType)}
					</Button>
				</div>,
			]}
		>
			<Space style={{display: 'flex', width: '100%', justifyContent: 'center', margin: '0 auto 25px'}}>
				<AuthSwitcher handleAuthType={handleAuthType} />
			</Space>
			<AuthForm form={form} handleFormLoading={handleFormLoading} closeLoginModal={closeLoginModal} authType={authType} />
		</Modal>
	)
}