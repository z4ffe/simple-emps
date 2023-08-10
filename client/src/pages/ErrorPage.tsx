import {Button, Result} from 'antd'
import {FC} from 'react'

interface Props {
	refetch: () => void
}

export const ErrorPage: FC<Props> = ({refetch}) => {
	return (
		<Result
			status='500'
			title='500'
			subTitle='Sorry, something went wrong.'
			extra={<Button type='primary' onClick={refetch}>Try again</Button>}
		/>
	)
}