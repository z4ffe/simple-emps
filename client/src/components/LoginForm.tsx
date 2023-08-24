import {zodResolver} from '@hookform/resolvers/zod'
import {Form, FormInstance, Input} from 'antd'
import {FC} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {loginSchema, LoginSchemaType} from '../schemas/loginSchema.ts'

interface Props {
	form: FormInstance
	handleFormLoading: (value: boolean) => void
}

export const LoginForm: FC<Props> = ({form, handleFormLoading}) => {
	const {control, handleSubmit, formState: {errors, isDirty, isValid}, reset} = useForm<LoginSchemaType>({resolver: zodResolver(loginSchema)})

	const formSubmit = async (values: LoginSchemaType) => {
		handleFormLoading(true)
		await new Promise((resolve, _) => {
			setTimeout(() => {
				resolve({})
			}, 1500)
		})
		handleFormLoading(false)
		reset()
		console.log(values)
	}

	return (
		<Form form={form} onFinish={handleSubmit(formSubmit)}>
			<Form.Item required label={`Login`} help={errors.login?.message} validateStatus={errors.login ? 'error' : ''}>
				<Controller control={control} name='login' render={({field}) => (
					<Input {...field} />)} />
			</Form.Item>
			<Form.Item required label={`Password`} help={errors.password?.message} validateStatus={errors.password ? 'error' : ''}>
				<Controller control={control} name='password' render={({field}) => (
					<Input {...field} />)} />
			</Form.Item>
		</Form>
	)
}