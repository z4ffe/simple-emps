import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {Col, DatePicker, Form, Input, Select} from 'antd'
import {Controller, useForm} from 'react-hook-form'
import {useDivision} from '../hooks/useDivision.ts'
import {usePosition} from '../hooks/usePosition.ts'
import {newEmployeeSchema, NewEmployeeSchemaType} from '../schemas/newEmployeeSchema.ts'
import employeeService from '../services/employeeService.ts'

export const NewEmployeeForm = () => {
	const queryClient = useQueryClient()
	const division = useDivision()
	const position = usePosition()

	const {control, handleSubmit, formState: {errors}, reset} = useForm<NewEmployeeSchemaType>({
		resolver: zodResolver(newEmployeeSchema),
	})

	const mutation = useMutation({
		mutationFn: (values: NewEmployeeSchemaType) => employeeService.createNewEmployee(values),
		onSuccess: () => {
			void queryClient.invalidateQueries(['employees'])
			reset()
		},
	})

	return (
		<Form onFinish={handleSubmit((values) => mutation.mutate(values))}>
			<Col>
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
				<Form.Item label='Position' help={errors.position?.message} validateStatus={errors.position ? 'error' : ''} rules={[{required: true}]}>
					<Controller control={control} name='position' render={({field}) => (
						<Select
							{...field}
							disabled={position.isLoading || position.isError}
							loading={position.isLoading}
							onChange={field.onChange}
							defaultValue={'Choose position'}
							options={position.data ? position.data.map((el) => {
								return {
									value: el.id,
									label: el.position_name,
								}
							}) : []}
						/>)} />
				</Form.Item>
				<Form.Item label='Division' help={errors.division?.message} validateStatus={errors.division ? 'error' : ''} rules={[{required: true}]}>
					<Controller control={control} name='division' render={({field}) => (
						<Select
							{...field}
							disabled={division.isLoading || division.isError}
							loading={division.isLoading}
							onChange={field.onChange}
							defaultValue={'Choose position'}
							options={division.data ? division.data.map((el) => {
								return {
									value: el.id,
									label: el.division_name,
								}
							}) : []}
						/>)} />
				</Form.Item>
				{/* TODO: help=errors.hireDate?.message for Hire Date */}
				<Form.Item label='Hire date' validateStatus={errors.hireDate ? 'error' : ''} rules={[{required: true}]}>
					<Controller control={control} name='hireDate' render={({field}) => (
						<DatePicker {...field} onChange={field.onChange} />)} />
				</Form.Item>
			</Col>
		</Form>
	)
}