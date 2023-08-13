import {useQuery} from '@tanstack/react-query'
import EmployeeService from '../services/employeeService.ts'

export const useEmployee = () => {
	return useQuery({
		queryKey: ['employees'],
		queryFn: () => EmployeeService.fetchAllEmployees(),
	})
}