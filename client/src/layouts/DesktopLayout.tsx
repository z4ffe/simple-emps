import {FC, PropsWithChildren} from 'react'

export const DesktopLayout: FC<PropsWithChildren> = ({children}) => {
	return (
		<div>
			{children}
		</div>
	)
}