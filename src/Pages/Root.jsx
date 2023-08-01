import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchHeader from '../components/SearchHeader';

export default function Root() {
	return (
		<div>
			<SearchHeader />
			<Outlet />
		</div>
	);
}
