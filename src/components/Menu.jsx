import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { BsYoutube } from 'react-icons/bs';
import { GoHomeFill } from 'react-icons/go';
import { ImMusic } from 'react-icons/im';
import { RxAvatar } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useAuthContext } from './Context/AuthContext';
import DarkMode from './DarkMode';
import Icon from './Icon';
import MenuIcon from './MenuIcon';
import UserIcon from './UserIcon';

export default function Menu({ menuOpenBtn, menuCloseBtn, isMenuOpen }) {
	const navigate = useNavigate();
	const { login, user, logout } = useAuthContext();
	const GoHome = () => {
		navigate('/videos');
	};
	const GoMusic = () => {
		navigate('/videos/music');
	};

	return (
		<div>
			{isMenuOpen && (
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
						{user ? (
							<div>
								<UserTab>
									<UserIcon user={user} />
								</UserTab>
								<MenuIcon icon={<BiLogOut />} text={'로그아웃'} onclick={logout} />
							</div>
						) : (
							<MenuIcon icon={<RxAvatar />} text={'로그인'} onclick={login} />
						)}

						<MenuIcon icon={<GoHomeFill />} text={'홈'} onclick={GoHome} />
						<MenuIcon icon={<ImMusic />} text={'Youtube Music'} onclick={GoMusic} />
						<DarkMode />
					</Bar>
				</Container>
			)}
		</div>
	);
}

const Container = styled.div`
	position: fixed;
	display: flex;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 1;
`;
const Bar = styled.div`
	background-color: var(--color-bg);
	color: var(--color-txt);
	width: 18rem;
	top: 0;
	bottom: 0;
	left: 0;
	position: fixed;
	height: 100vh;
	padding: 0 2vw;
	flex-direction: row;
	align-items: center;
	z-index: 2;
	padding-top: 8px;
	transition: 0.4s ease;
`;

const UserTab = styled.p`
	display: flex;
	width: 100%;
	height: 5rem;
	padding: 0 3rem;
	border-bottom: 3px solid var(--color-border);
`;
