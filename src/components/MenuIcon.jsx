import React from 'react';
import { styled } from 'styled-components';

export default function MenuIcon({ text, onclick, icon }) {
	return (
		<IconBar onClick={onclick}>
			{icon}
			{text}
		</IconBar>
	);
}

const IconBar = styled.div`
	display: flex;
	gap: 2rem;
	align-items: center;
	position: relative;
	border-radius: 10px;
	padding: 0 12px;
	min-width: 0;
	border-radius: 10px;
	height: 3rem;
	&:hover {
		background-color: #eeebeb;
	}
`;
