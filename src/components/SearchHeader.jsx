import React, { useState } from 'react';
import { BsSearch, BsYoutube } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchHeader() {
	const [text, setText] = useState('');
	const navigate = useNavigate();
	const submitHandler = e => {
		e.preventDefault();
		navigate(`videos/${text}`);
		setText('');
	};

	return (
		<header className="w-full flex justify-between p-4 text-2xl border-b border-zinc-600 mb-4">
			<Link to="/" className="flex items-center">
				<BsYoutube className="text-4xl text-brand" />
				<p className="font-bold ml-2 text-3xl">YouTube</p>
			</Link>

			<form onSubmit={submitHandler} className="flex justify-center items-center gap-x-4 w-full">
				<input
					className="flex items-center p-2 rounded-lg w-7/12 border-black border-current-gray bg-gray-100"
					type="text"
					value={text}
					placeholder="Search..."
					onChange={e => setText(e.target.value)}
				/>
				<BsSearch onClick={submitHandler} className="cursor-pointer" />
			</form>

			<article className="flex justify-center items-center gap-2">
				<FaRegBell className="cursor-pointer" />
				<RxAvatar className="cursor-pointer" />
			</article>
		</header>
	);
}
