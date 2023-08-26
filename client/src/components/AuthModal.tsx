import {Button, Form, Modal, Space} from 'antd'
import {FC, useState} from 'react'
import {SITE_CONSTANTS} from '../constants/siteConstants.ts'
import {IAuthModalSwitch} from '../types/AuthTypeSwitch.ts'
import {AuthForm} from './AuthForm.tsx'
import {AuthSwitcher} from './AuthSwitcher.tsx'

interface Props {
	authModal: IAuthModalSwitch
	closeAuthModal: () => void
	switchAuthType: (type: IAuthModalSwitch['type']) => void
}

export const AuthModal: FC<Props> = ({authModal, closeAuthModal, switchAuthType}) => {
	const [form] = Form.useForm()
	const [formLoading, setFormLoading] = useState(false)

	const handleForm = () => form.submit()
	const handleFormLoading = (value: boolean) => setFormLoading(value)

	console.log(authModal.type)

	return (
		<Modal
			centered
			title={<h1 style={{textAlign: 'center', margin: '0 auto 20px', fontSize: '1.2rem'}}>{SITE_CONSTANTS.AUTH_FORM.TITLE(authModal.type)}</h1>}
			open={authModal.status}
			onCancel={closeAuthModal}
			footer={[
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<Button key='back' onClick={closeAuthModal}>
						Cancel
					</Button>
					<Button key='submit' type='primary' loading={formLoading} onClick={handleForm}>
						{SITE_CONSTANTS.AUTH_FORM.SUBMIT_BUTTON(authModal.type)}
					</Button>
				</div>,
			]}
		>
			<Space style={{display: 'flex', width: '100%', justifyContent: 'center', margin: '0 auto 25px'}}>
				<AuthSwitcher switchAuthType={switchAuthType} />
			</Space>
			<AuthForm form={form} handleFormLoading={handleFormLoading} closeLoginModal={closeAuthModal} authType={authModal.type} />
		</Modal>
	)
}