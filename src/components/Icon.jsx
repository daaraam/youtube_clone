import React from 'react';

export default function Icon({ icon, onClick }) {
	return (
		<button className="flex items-center px-2 py-3 mx-1 rounded-full hover:bg-slate-200" onClick={onClick}>
			{icon}
		</button>
	);
}
