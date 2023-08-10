import {zodResolver} from '@hookform/resolvers/zod'
import {useQuery} from '@tanstack/react-query'
import {Button, DatePicker, Form, Input, Select} from 'antd'
import {Controller, useForm} from 'react-hook-form'
import {newEmployeeSchema, NewEmployeeSchemaType} from '../schemas/newEmployee.ts'

export const NewEmployeeForm = () => {
	const divisionQuery = useQuery({
		queryKey: ['division'],
		queryFn: () => {
		},
	})

	const {control, handleSubmit, formState: {errors}} = useForm<NewEmployeeSchemaType>({
		resolver: zodResolver(newEmployeeSchema),
	})


	const onSubmit = (values: NewEmployeeSchemaType) => {
		console.log(values)
	}

	return (
		<Form onFinish={handleSubmit(onSubmit)}>
			<Form.Item label='First name' help={errors.firstName?.message} validateStatus={errors.firstName ? 'error' : ''} rules={[{required: true}]}>
				<Controller control={control} name='firstName' render={({field}) => (
					<Input {...field} />)} />
			</Form.Item>
			<Form.Item label='Middle name' help={errors.middleName?.message} validateStatus={errors.middleName ? 'error' : ''} rules={[{required: true}]}>
				<Controller control={control} name='middleName' render={({field}) => (
					<Input {...field} />)} />
			</Form.Item>
			<Form.Item label='Last name' help={errors.lastName?.message} validateStatus={errors.lastName ? 'error' : ''} rules={[{required: true}]}>
				<Controller control={control} name='lastName' render={({field}) => (
					<Input {...field} />)} />
			</Form.Item>
			<Form.Item label='Hire date' help={errors.hireDate?.message} validateStatus={errors.hireDate ? 'error' : ''} rules={[{required: true}]}>
				<Controller control={control} name='hireDate' render={({field}) => (
					<DatePicker {...field} onChange={field.onChange} />)} />
			</Form.Item>
			<Form.Item label='Position' help={errors.position?.message} validateStatus={errors.position ? 'error' : ''} rules={[{required: true}]}>
				<Controller control={control} name='position' render={({field}) => (
					<Select
						{...field}
						style={{width: 120}}
						onChange={field.onChange}
						options={[
							{value: 1, label: 'Jack'},
							{value: 2, label: 'Lucy'},
							{value: 2, label: 'yiminghe'},
						]}
					/>)} />
			</Form.Item>
			<Button type='primary' htmlType='submit'>
				Submit
			</Button>
		</Form>
	)
}