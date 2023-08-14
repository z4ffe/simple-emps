import {useQuery} from '@tanstack/react-query'
import DivisionService from '../services/divisionService.ts'

export const usePosition = () => {
	return useQuery({
		queryKey: ['division'],
		queryFn: () => DivisionService.fetchAllDivisions(),
	})
}