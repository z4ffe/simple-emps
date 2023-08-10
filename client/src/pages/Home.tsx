import {useQuery} from '@tanstack/react-query'
import {Divider, Modal} from 'antd'
import Title from 'antd/es/typography/Title'
import {AxiosResponse} from 'axios'
import {useState} from 'react'
import {IEmployee} from '../../types/employee.ts'
import {EmployeesTable} from '../components/EmployeesTable.tsx'
import {NewEmployeeForm} from '../components/NewEmployeeForm.tsx'
import {ApiInstance} from '../lib/axios/AxiosInstance.ts'
import {AddButton} from '../shared/AddButton.tsx'
import {Loader} from '../shared/Loader.tsx'
import {ErrorPage} from './ErrorPage.tsx'

export const Home = () => {
	const [modal, setModal] = useState(false)

	const openModal = () => setModal(true)
	const closeModal = () => setModal(false)

	const fetchAllEmployees = async () => {
		const response: AxiosResponse<IEmployee[]> = await ApiInstance.get('/employee')
		return response.data
	}

	const employeesQuery = useQuery({
		queryKey: ['employees'],
		queryFn: fetchAllEmployees,
	})

	const refetchEmployees = () => {
		employeesQuery.refetch()
	}

	if (employeesQuery.isLoading) {
		return <Loader />
	}

	if (employeesQuery.isError) {
		return <ErrorPage refetch={refetchEmployees} />
	}

	return (
		<div>
			<Title style={{textAlign: 'center'}}>EPMS</Title>
			<Divider />
			<EmployeesTable data={employeesQuery.data} />
			<AddButton handler={openModal} modalStatus={modal} />
			<Modal
				title='New Employee'
				open={modal}
				onCancel={closeModal}
			>
				<NewEmployeeForm />
			</Modal>
		</div>
	)
}