import React, { createContext, useContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode(mode => !mode);
		updateDarkMode(!darkMode);
	};

	useEffect(() => {
		const isDark =
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches);
		setDarkMode(isDark);
		updateDarkMode(isDark);
	}, []);

	return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}

export const useDarkMode = () => useContext(DarkModeContext);
export const updateDarkMode = darkMode => {
	if (darkMode) {
		document.documentElement.classList.add('dark');
		localStorage.theme = 'dark';
	} else {
		document.documentElement.classList.remove('dark');
		localStorage.theme = 'light';
	}
};
