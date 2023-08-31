import React from 'react';
import { BsFillCloudSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { useDarkMode } from './Context/DarkModeContext';
import MenuIcon from './MenuIcon';

export default function DarkMode() {
	const { toggleDarkMode, darkMode } = useDarkMode();

	return (
		<div>
			{darkMode ? (
				<MenuIcon icon={<BsFillMoonStarsFill size={20} />} text={'다크모드'} onclick={toggleDarkMode} />
			) : (
				<MenuIcon icon={<BsFillCloudSunFill size={20} />} text={'라이트모드'} onclick={toggleDarkMode} />
			)}
		</div>
	);
}
