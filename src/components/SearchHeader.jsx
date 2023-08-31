import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Icon from './Icon';
import Menu from './Menu';
import SearchForm from './SearchForm';
import User from './User';

export default function SearchHeader() {
	const [menu, setMenu] = useState(false);
	const menuOpenBtn = () => {
		setMenu(true);
	};
	const menuCloseBtn = () => {
		setMenu(false);
	};

	return (
		<HeaderContainer className="flex justify-between w-full pt-2 pr-2 mb-12 text2xl ">
			<div className="flex items-center">
				<Icon icon={<AiOutlineMenu className="cursor-pointer " size={25} onClick={menuOpenBtn} />} />
				<Link to="/" className="flex items-center">
					<BsYoutube className="text-4xl text-brand" />
					<p className="ml-2 text-xl font-bold">YouTube</p>
				</Link>
				<Menu isMenuOpen={menu} menuOpenBtn={menuOpenBtn} menuCloseBtn={menuCloseBtn} />
			</div>

			<SearchForm />

			<UserDiv className="flex items-center justify-center gap-7">
				<User />
			</UserDiv>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	background-color: var(--color-bg);
	color: var(--color-txt);
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const UserDiv = styled.div`
	@media (max-width: 768px) {
		display: none;
	}
`;
