import {Divider, Modal} from 'antd'
import Title from 'antd/es/typography/Title'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {EmployeesTable} from '../components/EmployeesTable.tsx'
import {NewEmployeeForm} from '../components/NewEmployeeForm.tsx'
import {SITE_CONSTANTS} from '../constants/siteConstants.ts'
import {useEmployee} from '../hooks/useEmployee.ts'
import {AddButton} from '../shared/AddButton.tsx'
import {Loader} from '../shared/Loader.tsx'

export const Home = () => {
	const [modal, setModal] = useState(false)
	const navigate = useNavigate()

	const openModal = () => setModal(true)
	const closeModal = () => setModal(false)

	const employees = useEmployee()

	if (employees.isLoading) {
		return <Loader />
	}

	if (employees.isError) {
		navigate('/error')
		return <></>
	}

	return (
		<div>
			<Title style={{textAlign: 'center'}}>{SITE_CONSTANTS.MAIN_TITLE}</Title>
			<Divider />
			<EmployeesTable data={employees.data} />
			<AddButton handler={openModal} modalStatus={modal} />
			<Modal
				title={<h3 style={{textAlign: 'center'}}>{SITE_CONSTANTS.NEW_EMPLOYEE_TITLE}</h3>}
				open={modal}
				onCancel={closeModal}
				onOk={() => {
				}}
			>
				<Divider style={{marginTop: '10px', marginBottom: '20px'}} />
				<NewEmployeeForm />
			</Modal>
		</div>
	)
}