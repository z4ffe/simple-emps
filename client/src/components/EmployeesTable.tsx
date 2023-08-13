import {Button, Space, Table} from 'antd'
import {ColumnsType} from 'antd/es/table'
import {FC} from 'react'
import {IEmployee} from '../../types/employee.ts'

interface Props {
	data: IEmployee[]
}

export const EmployeesTable: FC<Props> = ({data}) => {
	const columns: ColumnsType<IEmployee> = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'First Name',
			dataIndex: 'first_name',
			key: 'first_name',
		},
		{
			title: 'Middle Name',
			dataIndex: 'middle_name',
			key: 'middle_name',
		},
		{
			title: 'Last Name',
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
			render: () => (
				<Space size='middle'>
					<Button>Edit</Button>
					<Button danger>Delete</Button>
				</Space>),
		},
	]

	return (
		<Table columns={columns} dataSource={data} pagination={{position: ['bottomCenter']}} />
	)
}