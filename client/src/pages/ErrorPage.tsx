import {Button, Result} from 'antd'
import {ResultStatusType} from 'antd/es/result'
import {FC} from 'react'
import {useNavigate} from 'react-router-dom'

interface Props {
	error: ResultStatusType
}

export const ErrorPage: FC<Props> = ({error}) => {
	const navigate = useNavigate()

	const BUTTON_TEXT = error === 404 ? 'Return to home' : 'Try again'
	const PAGE_TEXT = error === 404 ? 'Page not found' : 'Something went wrong'

	return (
		<Result
			status={error}
			title={error}
			subTitle={PAGE_TEXT}
			extra={<Button type='primary' onClick={() => navigate('/')}>{BUTTON_TEXT}</Button>}
		/>
	)
}