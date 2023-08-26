import {KeyOutlined, UserOutlined} from '@ant-design/icons'
import {zodResolver} from '@hookform/resolvers/zod'
import {Form, FormInstance, Input, notification} from 'antd'
import {FC, useEffect} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {useAppDispatch} from '../lib/redux/typedHooks.ts'
import {loginSchema, LoginSchemaType} from '../schemas/loginSchema.ts'
import {login} from '../store/user/userThunk.ts'
import {IAuthModalSwitch} from '../types/AuthTypeSwitch.ts'

interface Props {
	form: FormInstance
	handleFormLoading: (value: boolean) => void
	closeLoginModal: () => void
	authModal: IAuthModalSwitch
}

export const AuthForm: FC<Props> = ({form, handleFormLoading, closeLoginModal, authModal}) => {
	const {control, handleSubmit, formState: {errors}, reset, setError} = useForm<LoginSchemaType>({resolver: zodResolver(loginSchema)})
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
			setError('login', {type: 'custom', message: ''})
			setError('password', {type: 'custom', message: ''})
		}
	}

	useEffect(() => reset(), [authModal.type, reset])

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
			{/* {authModal.type === 'reg' ? <Form.Item required help={errors.confirmPassword?.message} validateStatus={errors.confirmPassword ? 'error' : ''}>
				<Controller control={control} name='confirmPassword' render={({field}) => (
					<Input.Password disabled={authModal.type !== 'reg'} placeholder='Confirm your password...'
										 addonBefore={<span style={{display: 'block', textAlign: 'left', width: '65px'}}>Confirm:</span>}
										 addonAfter={<KeyOutlined />} {...field} />)} />
			</Form.Item> : null} */}
		</Form>
	)
}