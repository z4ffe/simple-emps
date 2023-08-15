import {useQuery} from '@tanstack/react-query'
import PositionService from '../services/positionService.ts'

export const usePosition = () => {
	return useQuery({
		queryKey: ['position'],
		queryFn: () => PositionService.fetchAllPositions(),
	})
}