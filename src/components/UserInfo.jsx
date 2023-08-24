import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { BsFillCloudSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { styled } from 'styled-components';
import { useAuthContext } from './Context/AuthContext';
import { useDarkMode } from './Context/DarkModeContext';
import UserIcon from './UserIcon';
import UserInfoIcon from './UserInfoIcon';

export default function UserInfo({ logout, userInfoClose }) {
	const { toggleDarkMode, darkMode } = useDarkMode();
	const { user } = useAuthContext();

	return (
		<Container onclick={userInfoClose}>
			<Bar>
				<UserIconAndName>
					<UserIcon user={user} />
				</UserIconAndName>
				<UserInfoIcon icon={<BiLogOut size={20} />} text={'로그아웃'} onclick={logout} />
				{darkMode ? (
					<UserInfoIcon icon={<BsFillMoonStarsFill size={20} />} text={'다크모드'} onclick={toggleDarkMode} />
				) : (
					<UserInfoIcon
						icon={<BsFillCloudSunFill size={20} />}
						text={'라이트모드'}
						onclick={toggleDarkMode}
					/>
				)}
				<UserInfoIcon icon={<AiOutlineClose size={20} />} text={'닫기'} onclick={userInfoClose} />
			</Bar>
		</Container>
	);
}

const Container = styled.div`
	position: fixed;
	display: flex;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
`;

const Bar = styled.div`
	position: fixed;
	right: 50px;
	bottom: 433px;
	width: 21rem;
	height: 14rem;
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	align-items: center;
	background-color: var(--color-bg);
	border-radius: 1rem;
	box-shadow: 3px 45px 99px -16px rgba(0, 0, 0, 0.44);
	-webkit-box-shadow: 3px 45px 99px -16px rgba(0, 0, 0, 0.44);
	-moz-box-shadow: 3px 45px 99px -16px rgba(0, 0, 0, 0.44);
`;

const UserIconAndName = styled.p`
	display: flex;
	width: 20rem;
	height: 4rem;
	background-color: var(--color-hover);
	border-radius: 10px;
	padding: 0 12px;
`;
