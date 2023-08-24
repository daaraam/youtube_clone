import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillMicFill, BsSearch, BsYoutube } from 'react-icons/bs';
import { GoHomeFill } from 'react-icons/go';
import { ImDrawer, ImMusic } from 'react-icons/im';
import { TbBrandYoutubeKids } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Icon from './Icon';
import MenuIcon from './MenuIcon';
import SpeechRecognitionApp from './SpeechRecognition';
import User from './User';

export default function SearchHeader() {
	const [text, setText] = useState('');
	const [menu, setMenu] = useState(false);
	const [speech, setSpeech] = useState(false);

	const navigate = useNavigate();

	const submitHandler = e => {
		e.preventDefault();
		navigate(`/videos/${text}`);
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
		<BackGroundColor className="flex justify-between w-full pt-2 pr-2 mb-12 text2xl ">
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
			<DarkForm onSubmit={submitHandler} className="flex items-center justify-center w-5/12 gap-x-1 rounded-3xl">
				<DarkInput
					className="flex items-center w-full p-2 text-xl outline-none"
					type="text"
					value={text}
					placeholder="검색"
					onChange={e => setText(e.target.value)}
				/>
				<div className="flex items-center justify-center mr-1">
					<Icon onClick={submitHandler} icon={<BsSearch className="cursor-pointer" size={20} />} />
					<Icon
						onClick={() => setSpeech(!speech)}
						icon={<BsFillMicFill className="cursor-pointer" size={20} />}
					/>
				</div>
			</DarkForm>

			{speech && <SpeechRecognitionApp speech={speech} setSpeech={setSpeech} />}

			<div className="flex items-center justify-center gap-7">
				{/* <Icon icon={<FaRegBell className="cursor-pointer " size={25} />} /> */}
				{/* <RxAvatar className="cursor-pointer" size={30} /> */}
				<User />
			</div>
		</BackGroundColor>
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
	background-color: var(--color-bg);
	color: var(--color-txt);
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

const BackGroundColor = styled.div`
	background-color: var(--color-bg);
	color: var(--color-txt);
`;

const DarkForm = styled.form`
	border: 1px solid var(--color-border);
`;

const DarkInput = styled.input`
	background-color: var(--color-bg);
	border-right: 1px solid var(--color-border);
	margin-left: 1.5rem;
`;
