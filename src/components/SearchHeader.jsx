import React, { useState } from 'react';
import { BsSearch, BsYoutube } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchHeader() {
	const [text, setText] = useState('');
	const navigate = useNavigate();
	const submitHandler = e => {
		e.preventDefault();
		navigate(`videos/watch/${text}`);
		setText('');
	};

	return (
		<header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
			<Link to="/" className="flex items-center">
				<BsYoutube className="text-4xl text-brand" />
				<p className="font-bold ml-2 text-3xl">YouTube</p>
			</Link>
			<form onSubmit={submitHandler} className="flex justify-center items-center gap-x-4">
				<input
					className="w-9/12 p-2 outline-none bg-gray-100 rounded-lg"
					value={text}
					placeholder="Search..."
					onChange={e => setText(e.target.value)}
				/>
				<BsSearch onClick={submitHandler} />
			</form>
		</header>
	);
}
