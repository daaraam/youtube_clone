import React from 'react';
import { styled } from 'styled-components';

export default function Error() {
	return (
		<ErrorImg>
			<img
				src="https://www.nicepng.com/png/detail/212-2123494_the-page-looks-great-but-i-have-trouble.png"
				alt="404Error"
				width={800}
				height={500}
			/>
		</ErrorImg>
	);
}

const ErrorImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: var(--color-bg);
`;
