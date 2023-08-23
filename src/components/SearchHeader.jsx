import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillMicFill, BsSearch, BsYoutube } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { ImDrawer, ImMusic } from 'react-icons/im';
import { RxAvatar } from 'react-icons/rx';
import { TbBrandYoutubeKids } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Icon from './Icon';
import MenuIcon from './MenuIcon';
import SpeechRecognitionApp from './SpeechRecognition';

export default function SearchHeader() {
	const [text, setText] = useState('');
	const [menu, setMenu] = useState(false);
	const [speech, setSpeech] = useState(false);

	const navigate = useNavigate();
	const submitHandler = e => {
		e.preventDefault();
		navigate(`/videos/${text}`);
		setText('');
	};

	const menuOpenBtn = e => {
		setMenu(true);
		document.body.style.overflow = 'hidden';
	};
	const menuCloseBtn = e => {
		setMenu(false);
		document.body.style.overflow = 'unset';
	};

	return (
		<header className="flex justify-between w-full pt-2 pr-2 mb-12 text2xl ">
			<div className="flex items-center">
				<Icon icon={<AiOutlineMenu className="cursor-pointer " size={25} onClick={menuOpenBtn} />} />
				<Link to="/" className="flex items-center">
					<BsYoutube className="text-4xl text-brand" />
					<p className="ml-2 text-xl font-bold">YouTube</p>
				</Link>

				{menu && (
					<Container onClick={menuCloseBtn}>
						<Bar>
							<div className="flex">
								<Icon
									onClick={menuOpenBtn}
									icon={<AiOutlineMenu className="cursor-pointer " size={25} />}
								/>
								<Link to="/" className="flex items-center">
									<BsYoutube className="text-4xl text-brand" />
									<p className="ml-2 text-xl font-bold">YouTube</p>
								</Link>
							</div>
							<MenuIcon icon={<GoHomeFill />} text={'홈'} onclick={menuCloseBtn} />
							<MenuIcon icon={<TbBrandYoutubeKids />} text={'Shorts'} onclick={menuCloseBtn} />
							<MenuIcon icon={<ImDrawer />} text={'구독'} onclick={menuCloseBtn} />
							<MenuIcon icon={<ImMusic />} text={'Youtube Music'} onclick={menuCloseBtn} />
						</Bar>
					</Container>
				)}
			</div>
			<form
				onSubmit={submitHandler}
				className="flex items-center justify-center w-5/12 border gap-x-4 rounded-3xl border-zinc-300 "
			>
				<input
					className="flex items-center w-full p-2 text-xl outline-indigo-300 rounded-3xl"
					type="text"
					value={text}
					placeholder="검색"
					onChange={e => setText(e.target.value)}
				/>
				<div className="flex">
					<Icon onClick={submitHandler} icon={<BsSearch className="cursor-pointer" size={20} />} />
					<Icon
						onClick={() => setSpeech(!speech)}
						icon={<BsFillMicFill className="cursor-pointer" size={20} />}
					/>
				</div>
			</form>

			{speech && <SpeechRecognitionApp speech={speech} setSpeech={setSpeech} />}

			<div className="flex items-center justify-center gap-7">
				<Icon icon={<FaRegBell className="cursor-pointer " size={25} />} />
				<RxAvatar className="cursor-pointer" size={30} />
			</div>
		</header>
	);
}

const Container = styled.div`
	position: fixed;
	display: flex;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 1;
`;

const Bar = styled.div`
	background-color: white;
	width: 16rem;
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;
	padding: 0 2vw;
	flex-direction: row;
	align-items: center;
	z-index: 2;
	padding-top: 8px;
`;
