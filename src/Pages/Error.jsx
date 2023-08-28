import React from 'react';
import { styled } from 'styled-components';

export default function Error() {
	return (
		<ErrorImg>
			<img
				src="https://www.nicepng.com/png/detail/212-2123494_the-page-looks-great-but-i-have-trouble.png"
				alt="404Error"
			/>
		</ErrorImg>
	);
}

const ErrorImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: var(--color-bg);
`;
