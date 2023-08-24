import {Form, Modal} from 'antd'
import {FC, useState} from 'react'
import {LoginForm} from './LoginForm.tsx'

interface Props {
	loginModal: boolean
	closeLoginModal: () => void
}

export const LoginModal: FC<Props> = ({loginModal, closeLoginModal}) => {
	const [form] = Form.useForm()
	const [formLoading, setFormLoading] = useState(false)

	const handleForm = () => form.submit()
	const handleFormLoading = (value: boolean) => setFormLoading(value)

	return (
		<Modal
			centered
			title={<h1 style={{textAlign: 'center', margin: '0 auto 20px', fontSize: '1.2rem'}}>Login</h1>}
			open={loginModal}
			onOk={handleForm}
			confirmLoading={formLoading}
			onCancel={closeLoginModal}
		>
			<LoginForm form={form} handleFormLoading={handleFormLoading} />
		</Modal>
	)
}