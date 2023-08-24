import {zodResolver} from '@hookform/resolvers/zod'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {Button, Col, DatePicker, Divider, Form, Input, message, Row, Select, Switch} from 'antd'
import {useState} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {useDivision} from '../hooks/useDivision.ts'
import {usePosition} from '../hooks/usePosition.ts'
import {newEmployeeSchema, NewEmployeeSchemaType} from '../schemas/newEmployeeSchema.ts'
import employeeService from '../services/employeeService.ts'


export const NewEmployeeForm = () => {
	const queryClient = useQueryClient()
	const division = useDivision()
	const position = usePosition()
	const [middleNameOption, setMiddleNameOption] = useState(false)

	const handleMiddleNameOption = () => setMiddleNameOption(prevState => !prevState)

	const {control, handleSubmit, formState: {errors, isDirty, isValid}, reset} = useForm<NewEmployeeSchemaType>({
		resolver: zodResolver(newEmployeeSchema),
	})

	const addEmployeeMutation = useMutation(
		(values: NewEmployeeSchemaType) => employeeService.createNewEmployee(values), {
			onSuccess: async (_: unknown, values: NewEmployeeSchemaType) => {
				await queryClient.invalidateQueries(['employees'])
				reset()
				await message.success(`Employee ${values.lastName} ${values.firstName} was created`)
			}, onError: () => {
				void message.error('Something went wrong. Try again later')
			}, onMutate: async () => {
				await message.loading('Adding new employee...')
			},
		},
	)

	return (
		<Form onFinish={handleSubmit((values) => addEmployeeMutation.mutate(values))}>
			<Col>
				<Col>
					<Row style={{gap: '15px'}}>
						<Form.Item required label={`First name`} help={errors.firstName?.message} validateStatus={errors.firstName ? 'error' : ''}>
							<Controller control={control} name='firstName' render={({field}) => (
								<Input {...field} />)} />
						</Form.Item>
						<Form.Item required label='Last name' help={errors.lastName?.message} validateStatus={errors.lastName ? 'error' : ''} rules={[{required: true}]}>
							<Controller control={control} name='lastName' render={({field}) => (
								<Input {...field} />)} />
						</Form.Item>
					</Row>
					<Row style={{display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'space-between'}}>
						<Switch
							checkedChildren='Middle name:'
							unCheckedChildren='Middle name'
							defaultChecked={false}
							onClick={handleMiddleNameOption}
						/>
						<Form.Item required={!middleNameOption} style={{margin: 0, width: '75%'}} help={errors.middleName?.message} validateStatus={errors.middleName ? 'error' : ''}>
							<Controller control={control} name='middleName' render={({field}) => (
								<Input disabled={!middleNameOption} {...field} />)} />
						</Form.Item>
					</Row>
				</Col>
				<Divider />
				<Col>
					<Form.Item required label='Position' help={errors.position?.message} validateStatus={errors.position ? 'error' : ''}>
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
					<Form.Item required label='Division' help={errors.division?.message} validateStatus={errors.division ? 'error' : ''}>
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
				</Col>
				<Divider />
				<Row style={{display: 'flex', justifyContent: 'space-between'}}>
					<Form.Item required label='Hire date' help={<>{errors.hireDate?.message}</>} validateStatus={errors.hireDate ? 'error' : ''}>
						<Controller control={control} name='hireDate' render={({field}) => (
							<DatePicker {...field} onChange={field.onChange} />)} />
					</Form.Item>
					{/* TODO: Projects business logic */}
					<Form.Item label='Project' help={errors.project?.message} validateStatus={errors.project ? 'error' : ''}>
						<Controller control={control} name='project' render={({field}) => (
							<Select
								{...field}
								//disabled={division.isLoading || division.isError}
								//loading={division.isLoading}
								//onChange={field.onChange}
								defaultValue={'Choose project'}
								/* options={division.data ? division.data.map((el) => {
									return {
										value: el.id,
										label: el.division_name,
									}
								}) : []} */
							/>)} />
					</Form.Item>
				</Row>
				<Divider />
				<Col style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
					<Button disabled={!isValid} type='primary' htmlType='submit'>Add employee</Button>
					<Button disabled={!isDirty} type='dashed' onClick={() => reset()}>Clear form</Button>
				</Col>
			</Col>
		</Form>
	)
}



