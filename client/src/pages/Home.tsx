import {Divider, Modal} from 'antd'
import Title from 'antd/es/typography/Title'
import {useState} from 'react'
import {EmployeesTable} from '../components/EmployeesTable.tsx'
import {NewEmployeeForm} from '../components/NewEmployeeForm.tsx'
import {useEmployee} from '../hooks/useEmployee.ts'
import {AddButton} from '../shared/AddButton.tsx'
import {Loader} from '../shared/Loader.tsx'
import {ErrorPage} from './ErrorPage.tsx'

export const Home = () => {
	const [modal, setModal] = useState(false)

	const openModal = () => setModal(true)
	const closeModal = () => setModal(false)

	const employees = useEmployee()

	if (employees.isLoading) {
		return <Loader />
	}

	if (employees.isError) {
		return <ErrorPage />
	}

	return (
		<div>
			<Title style={{textAlign: 'center'}}>EPMS</Title>
			<Divider />
			<EmployeesTable data={employees.data} />
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