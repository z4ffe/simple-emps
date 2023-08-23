import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {DesktopLayout} from './layouts/DesktopLayout.tsx'
import {Router} from './routes/Router.tsx'
import store from './store/store.ts'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<DesktopLayout>
						<Router />
					</DesktopLayout>
				</QueryClientProvider>
			</Provider>
		</BrowserRouter>
	)
}