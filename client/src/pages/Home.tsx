import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {EmployeesTable} from '../components/EmployeesTable.tsx'
import {NewEmployeeModal} from '../components/NewEmployeeModal.tsx'
import {useEmployee} from '../hooks/useEmployee.ts'
import {useAppSelector} from '../lib/redux/typedHooks.ts'
import {ControlFloatPanel} from '../shared/ControlFloatPanel.tsx'
import {Loader} from '../shared/Loader.tsx'
import {Roles} from '../types/roles.ts'


export const Home = () => {
	const [newEmployeeModal, setNewEmployeeModal] = useState(false)
	const role = useAppSelector(state => state.userReducer.role)
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
			{role === Roles.ADMIN || role === Roles.MODERATOR ? <ControlFloatPanel newEmployeeModal={newEmployeeModal} handleNewEmployeeModal={handleNewEmployeeModal} /> : null}
			<NewEmployeeModal newEmployeeModal={newEmployeeModal} handleNewEmployeeModal={handleNewEmployeeModal} />
		</>
	)
}