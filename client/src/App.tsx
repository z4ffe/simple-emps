import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {BrowserRouter} from 'react-router-dom'
import {Header} from './components/Header.tsx'
import {DesktopLayout} from './layouts/DesktopLayout.tsx'
import {Router} from './routes/Router.tsx'

const queryClient = new QueryClient()

export const App = () => {
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