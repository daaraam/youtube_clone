import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { styled } from 'styled-components';
import { useAuthContext } from './Context/AuthContext';
import UserIcon from './UserIcon';
import UserInfoIcon from './UserInfoIcon';

export default function UserInfo({ userInfoClose }) {
	const { user, logout } = useAuthContext();

	return (
		<Container onClick={userInfoClose}>
			<Bar>
				<UserIconAndName>
					<UserIcon user={user} />
				</UserIconAndName>
				<UserInfoIcon icon={<BiLogOut size={20} />} text={'로그아웃'} onclick={logout} />
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
	background-color: rgba(0, 0, 0, 0.6);
`;

const Bar = styled.div`
	position: fixed;
	right: 50px;
	width: 21rem;
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
export const UserIconAndName = styled.p`
	display: flex;
	width: 100%;
	height: 5rem;
	padding: 0 3rem;
	border-bottom: 3px solid var(--color-border);
`;
