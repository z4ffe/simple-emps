import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {DesktopLayout} from './layouts/DesktopLayout.tsx'
import {Home} from './pages/Home.tsx'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<DesktopLayout>
				<Home />
			</DesktopLayout>
		</QueryClientProvider>
	)
}