import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<SearchHeader />
			<YoutubeApiProvider>
				{/* youtube인스턴스를 제공하는 우산 */}
				<QueryClientProvider client={queryClient}>
					<Outlet />
				</QueryClientProvider>
			</YoutubeApiProvider>
		</>
	);
}

export default App;
