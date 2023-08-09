import {Table} from 'antd'
import {ColumnsType} from 'antd/es/table'
import {FC} from 'react'
import {IEmployee} from '../../types/employee.ts'

interface Props {
	data: IEmployee[]
}

export const EmployeesTable: FC<Props> = ({data}) => {
	const columns: ColumnsType<IEmployee> = [
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
	]

	return (
		<Table columns={columns} dataSource={data} />
	)
}