import {ExclamationCircleOutlined} from '@ant-design/icons'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {Button, message, Modal, Space, Table} from 'antd'
import {ColumnsType} from 'antd/es/table'
import {FC, useState} from 'react'
import {SITE_CONSTANTS} from '../constants/siteConstants.ts'
import employeeService from '../services/employeeService.ts'
import {IEmployee} from '../types/interfaces/employee.ts'

interface Props {
	data: IEmployee[]
}

export const EmployeesTable: FC<Props> = ({data}) => {
	const [deleteModal, setDeleteModal] = useState(false)
	const [employeeId, setEmployeeId] = useState<number | null>(null)

	const handleModalOpen = (id: number) => {
		setEmployeeId(+id)
		setDeleteModal(true)
	}
	const handleModalClose = () => {
		setEmployeeId(null)
		setDeleteModal(false)
	}

	const queryClient = useQueryClient()
	const employeeDeleteMutation = useMutation({
		mutationFn: () => employeeService.deleteEmployeeById(employeeId),
		onSuccess: async () => {
			await message.warning('Employee successfully deleted')
			await queryClient.invalidateQueries(['employees'])
			handleModalClose()
		},
		onError: async () => {
			await message.error('Something went wrong')
			await queryClient.invalidateQueries(['employees'])
			handleModalClose()
		},
	})

	const columns: ColumnsType<IEmployee> = [
		{
			title: SITE_CONSTANTS.EMPLOYEE_FORM.FIRST_NAME,
			dataIndex: 'first_name',
			key: 'first_name',
		},
		{
			title: SITE_CONSTANTS.EMPLOYEE_FORM.MIDDLE_NAME,
			key: 'middle_name',
			render: (record: IEmployee) => record.middle_name ? record.middle_name : '-',
		},
		{
			title: SITE_CONSTANTS.EMPLOYEE_FORM.LAST_NAME,
			dataIndex: 'last_name',
			key: 'last_name',
		},
		{
			title: 'Hire Date',
			dataIndex: 'hire_date',
			key: 'hire_date',
		},
		{
			title: 'Position',
			key: 'position',
			render: (record) => record.position.position_name,
		},
		{
			title: 'Salary',
			key: 'salary',
			render: (record) => `${record.position.salary}₽`,
		},
		{
			title: 'Division Type / Division',
			key: 'division',
			render: (record) => `${record.division.division_type.division_type_name} / ${record.division.division_name}`,
		},
		{
			title: 'Division Address',
			key: 'address',
			render: (record) => `${record.division.division_address.division_city.region.region_name}, ${record.division.division_address.division_city.city_name}, ${record.division.division_address.division_address}`,
		},
		{
			title: 'Action',
			key: 'action',
			render: (record: IEmployee) => (
				<Space size='middle'>
					<Button key='button_edit'>Edit</Button>
					<Button key='button_delete' onClick={() => handleModalOpen(record.id)}>Delete</Button>
				</Space>),
		},
	]

	return (
		<>
			<Table columns={columns} dataSource={data} rowKey={(record) => record.id} pagination={{position: ['bottomCenter']}} />
			<Modal
				title={<><ExclamationCircleOutlined style={{color: 'red', fontSize: '20px'}} /><h3>{SITE_CONSTANTS.EMPLOYEE_DELETE_MODAL.TITLE}</h3></>}
				open={deleteModal}
				onOk={handleModalClose}
				onCancel={handleModalClose}
				okText='Delete'
				cancelText='Cancel'
				centered
				footer={
					<>
						<Button type='default' onClick={handleModalClose}>{SITE_CONSTANTS.EMPLOYEE_DELETE_MODAL.CANCEL_BUTTON}</Button>
						<Button type='primary' danger onClick={() => employeeDeleteMutation.mutate()}>{SITE_CONSTANTS.EMPLOYEE_DELETE_MODAL.DELETE_BUTTON}</Button>
					</>
				}
			>
				<p>{SITE_CONSTANTS.EMPLOYEE_DELETE_MODAL.TEXT}</p>
			</Modal>
		</>
	)
}