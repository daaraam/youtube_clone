import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { styled } from 'styled-components';
import UserInfoIcon from './UserInfoIcon';

export default function UserInfo({ logout, userInfoClose }) {
	return (
		<Container onclick={userInfoClose}>
			<Bar>
				<UserInfoIcon icon={<AiOutlineClose size={20} />} text={'닫기'} onclick={userInfoClose} />
				<UserInfoIcon icon={<BiLogOut size={20} />} text={'로그아웃'} onclick={logout} />
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
	bottom: 400px;
	width: 21rem;
	height: 15rem;
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	align-items: center;
	background-color: #ffffff;
	border-radius: 1rem;
	box-shadow: 3px 45px 99px -16px rgba(0, 0, 0, 0.44);
	-webkit-box-shadow: 3px 45px 99px -16px rgba(0, 0, 0, 0.44);
	-moz-box-shadow: 3px 45px 99px -16px rgba(0, 0, 0, 0.44);
`;

const Close = styled.span`
	position: fixed;
	display: flex;
	bottom: 400px;
	width: 21rem;
	justify-content: flex-end;
	top: 0;
	padding: 0.5rem;
	:hover {
		background-color: #eeebeb;
		border-radius: 100%;
	}
`;
