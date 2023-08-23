import React from 'react';

import { styled } from 'styled-components';

export default function Icon({ icon, onClick }) {
	return <IconBtn onClick={onClick}>{icon}</IconBtn>;
}

const IconBtn = styled.button`
	display: flex;
	align-items: center;
	padding: 0.5rem;
	margin: 0.25rem;
	border-radius: 100%;
	&:hover {
		background-color: #eeebeb;
	}
	cursor: pointer;
`;
