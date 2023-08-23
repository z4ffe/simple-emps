import {Divider} from 'antd'
import {FC, PropsWithChildren} from 'react'

export const DesktopLayout: FC<PropsWithChildren> = ({children}) => {
	return (
		<div style={{maxWidth: '1920px', margin: '0 auto'}}>
			<Divider />
			{children}
		</div>
	)
}