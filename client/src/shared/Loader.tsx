import {Space, Spin} from 'antd'

export const Loader = () => {
	return (
		<Space direction='vertical' style={{width: '100%', marginTop: '200px'}}>
			<Spin tip='Loading' size='large'>
				<div className='content' />
			</Spin>
		</Space>
	)
}