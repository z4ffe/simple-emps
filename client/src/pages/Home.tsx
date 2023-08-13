import {useQuery} from '@tanstack/react-query'
import {Divider, Modal} from 'antd'
import Title from 'antd/es/typography/Title'
import {useState} from 'react'
import {EmployeesTable} from '../components/EmployeesTable.tsx'
import {NewEmployeeForm} from '../components/NewEmployeeForm.tsx'
import employeeService from '../services/employeeService.ts'
import {AddButton} from '../shared/AddButton.tsx'
import {Loader} from '../shared/Loader.tsx'
import {ErrorPage} from './ErrorPage.tsx'

export const Home = () => {
	const [modal, setModal] = useState(false)

	const openModal = () => setModal(true)
	const closeModal = () => setModal(false)

	const employeesQuery = useQuery({
		queryKey: ['employees'],
		queryFn: employeeService.fetchAllEmployees,
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