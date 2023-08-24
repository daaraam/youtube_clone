import React from 'react';

export default function UserIcon({ user: { photoURL, displayName }, onClick }) {
	return (
		<div className="flex items-center cursor-pointer shrink-0 ">
			<img onClick={onClick} className="w-10 h-10 mr-2 rounded-full" src={photoURL} alt="photoURL" />
			<span className="hidden text-sm md:block">{displayName}</span>
		</div>
	);
}
