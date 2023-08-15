import {Divider} from 'antd'
import Title from 'antd/es/typography/Title'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {EmployeesTable} from '../components/EmployeesTable.tsx'
import {NewEmployeeModal} from '../components/NewEmployeeModal.tsx'
import {SITE_CONSTANTS} from '../constants/siteConstants.ts'
import {useEmployee} from '../hooks/useEmployee.ts'
import {ControlFloatPanel} from '../shared/ControlFloatPanel.tsx'
import {Loader} from '../shared/Loader.tsx'


export const Home = () => {
	const [newEmployeeModal, setNewEmployeeModal] = useState(false)
	const employees = useEmployee()
	const navigate = useNavigate()


	const handleNewEmployeeModal = () => setNewEmployeeModal(prevState => !prevState)

	if (employees.isLoading) {
		return <Loader />
	}

	if (employees.isError) {
		navigate('/error')
		return <></>
	}

	return (
		<>
			<Title style={{textAlign: 'center'}}>{SITE_CONSTANTS.MAIN_TITLE}</Title>
			<Divider />
			<EmployeesTable data={employees.data} />
			<ControlFloatPanel newEmployeeModal={newEmployeeModal} handleNewEmployeeModal={handleNewEmployeeModal} />
			<NewEmployeeModal newEmployeeModal={newEmployeeModal} handleNewEmployeeModal={handleNewEmployeeModal} />
		</>
	)
}