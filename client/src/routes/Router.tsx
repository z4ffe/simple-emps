import {Route, Routes} from 'react-router-dom'
import {ErrorPage} from '../pages/ErrorPage.tsx'
import {Home} from '../pages/Home.tsx'

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='*' element={<ErrorPage error={404} />} />
			<Route path='/error' element={<ErrorPage error={500} />} />
		</Routes>
	)
}