import {KeyOutlined, UserOutlined} from '@ant-design/icons'
import {zodResolver} from '@hookform/resolvers/zod'
import {Form, FormInstance, Input, notification} from 'antd'
import {FC} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {useAppDispatch} from '../lib/redux/typedHooks.ts'
import {loginSchema, LoginSchemaType} from '../schemas/loginSchema.ts'
import {login} from '../store/user/userThunk.ts'

interface Props {
	form: FormInstance
	handleFormLoading: (value: boolean) => void
	closeLoginModal: () => void
}

export const LoginForm: FC<Props> = ({form, handleFormLoading, closeLoginModal}) => {
	const {control, handleSubmit, formState: {errors}, reset} = useForm<LoginSchemaType>({resolver: zodResolver(loginSchema)})
	const dispatch = useAppDispatch()

	const formSubmit = async (values: LoginSchemaType) => {
		try {
			handleFormLoading(true)
			await dispatch(login(values)).unwrap()
			handleFormLoading(false)
			notification.success({message: 'You are logged in', duration: 3})
			reset()
			closeLoginModal()

		} catch (error) {
			handleFormLoading(false)
			reset()
		}

	}

	return (
		<Form form={form} onFinish={handleSubmit(formSubmit)}>
			<Form.Item required help={errors.login?.message} validateStatus={errors.login ? 'error' : ''}>
				<Controller control={control} name='login' render={({field}) => (
					<Input placeholder='Enter your login...' addonBefore={<span style={{display: 'block', textAlign: 'left', width: '65px'}}>Login:</span>} addonAfter={<UserOutlined />} {...field} />)} />
			</Form.Item>
			<Form.Item required help={errors.password?.message} validateStatus={errors.password ? 'error' : ''}>
				<Controller control={control} name='password' render={({field}) => (
					<Input.Password placeholder='Enter your password...' addonBefore='Password:' addonAfter={<KeyOutlined />} {...field} />)} />
			</Form.Item>
		</Form>
	)
}