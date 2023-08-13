import {Button, Result} from 'antd'

export const ErrorPage = () => {
	return (
		<Result
			status='500'
			title='500'
			subTitle='Sorry, something went wrong.'
			extra={<Button type='primary'>Try again</Button>}
		/>
	)
}