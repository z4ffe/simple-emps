import {useQueryClient} from '@tanstack/react-query'
import {Button, Result} from 'antd'

export const ErrorPage = () => {
	const {invalidateQueries} = useQueryClient()

	return (
		<Result
			status='500'
			title='500'
			subTitle='Sorry, something went wrong.'
			extra={<Button type='primary' onClick={() => invalidateQueries(['employees'])}>Try again</Button>}
		/>
	)
}