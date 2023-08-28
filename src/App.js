import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './components/Context/AuthContext';
import DarkModeProvider from './components/Context/DarkModeContext';
import { YoutubeApiProvider } from './components/Context/YoutubeApiContext';
import SearchHeader from './components/SearchHeader';

const queryClient = new QueryClient();

function App() {
	return (
		<DarkModeProvider>
			<AuthContextProvider>
				<SearchHeader />
				{/* youtube인스턴스를 제공하는 우산 */}
				<YoutubeApiProvider>
					<QueryClientProvider client={queryClient}>
						<Outlet />
					</QueryClientProvider>
				</YoutubeApiProvider>
			</AuthContextProvider>
		</DarkModeProvider>
	);
}

export default App;
