import {useQuery} from '@tanstack/react-query'
import Title from 'antd/es/typography/Title'
import {AxiosResponse} from 'axios'
import {IEmployee} from '../../types/employee.ts'
import {EmployeesTable} from '../components/EmployeesTable.tsx'
import {ApiInstance} from '../lib/axios/AxiosInstance.ts'
import {Loader} from '../shared/Loader.tsx'
import {ErrorPage} from './ErrorPage.tsx'

export const Home = () => {
	const fetchAllEmployees = async () => {
		const response: AxiosResponse<IEmployee[]> = await ApiInstance.get('/employee')
		return response.data
	}

	const employeesQuery = useQuery({
		queryKey: ['employees'],
		queryFn: fetchAllEmployees,
	})

	if (employeesQuery.isLoading) {
		return <Loader />
	}

	if (employeesQuery.isError) {
		return <ErrorPage />
	}

	return (
		<div>
			<Title>Home</Title>
			<EmployeesTable data={employeesQuery.data} />
		</div>
	)
}