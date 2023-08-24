import React from 'react';
import { styled } from 'styled-components';

export default function UserInfoIcon({ text, onclick, icon }) {
	return (
		<InfoBar onClick={onclick}>
			{icon}
			{text}
		</InfoBar>
	);
}

const InfoBar = styled.div`
	display: flex;
	gap: 3rem;
	align-items: center;
	position: relative;
	border-radius: 10px;
	padding: 0 12px;
	min-width: 0;
	border-radius: 10px;
	height: 3rem;
	width: 20rem;
	&:hover {
		background-color: var(--color-hover);
	}
	cursor: pointer;
`;
