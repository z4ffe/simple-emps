import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {EmployeesTable} from '../components/EmployeesTable.tsx'
import {NewEmployeeModal} from '../components/NewEmployeeModal.tsx'
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
			<EmployeesTable data={employees.data} />
			<ControlFloatPanel newEmployeeModal={newEmployeeModal} handleNewEmployeeModal={handleNewEmployeeModal} />
			<NewEmployeeModal newEmployeeModal={newEmployeeModal} handleNewEmployeeModal={handleNewEmployeeModal} />
		</>
	)
}