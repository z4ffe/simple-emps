import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Header} from './components/Header.tsx'
import {DesktopLayout} from './layouts/DesktopLayout.tsx'
import {useAppDispatch} from './lib/redux/typedHooks.ts'
import {Router} from './routes/Router.tsx'
import {login} from './store/user/userThunk.ts'
import {getRefreshTokenFromCookies} from './utils/cookies.ts'

const queryClient = new QueryClient()

export const App = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const token = getRefreshTokenFromCookies()
		if (token) {
			dispatch(login())
		}
	}, [])

	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Header />
				<DesktopLayout>
					<Router />
				</DesktopLayout>
			</QueryClientProvider>
		</BrowserRouter>
	)
}