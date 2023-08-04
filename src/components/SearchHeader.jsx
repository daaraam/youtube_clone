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
		navigate(`/videos/${text}`);
		setText('');
	};

	return (
		<header className="flex justify-between w-full p-4 mb-4 text-2xl ">
			<Link to="/" className="flex items-center">
				<BsYoutube className="text-4xl text-brand" />
				<p className="ml-2 text-3xl font-bold">YouTube</p>
			</Link>

			<form
				onSubmit={submitHandler}
				className="flex items-center justify-center w-5/12 border gap-x-4 rounded-3xl border-zinc-300 "
			>
				<input
					className="flex items-center w-full p-2 text-xl outline-blue-500 rounded-3xl"
					type="text"
					value={text}
					placeholder="검색"
					onChange={e => setText(e.target.value)}
				/>
				<BsSearch onClick={submitHandler} className="mr-4 cursor-pointer" />
			</form>

			<div className="flex items-center justify-center gap-7">
				<FaRegBell className="cursor-pointer" size={25} />
				<RxAvatar className="cursor-pointer" size={30} />
			</div>
		</header>
	);
}
