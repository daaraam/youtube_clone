import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './Pages/Error';
import Root from './Pages/Root';
import VideoDetail from './Pages/VideoDetail';
import Videos from './Pages/Videos';

export default function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Root />,
			errorElement: <Error />,
			children: [
				{ index: true, element: <Videos /> },
				{ path: 'videos', element: <Videos /> },
				{ path: 'videos/:keyword', element: <Videos /> },
				{ path: 'videos/watch/:videoId', element: <VideoDetail /> },
			],
		},
	]);
	return <RouterProvider router={router} />;
}
