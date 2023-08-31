import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { useYoutubeApi } from '../components/Context/YoutubeApiContext';
import VideoCard from '../components/VideoCard';
import styles from './Loading.module.css';

export default function Videos() {
	const { keyword } = useParams();
	const { youtube } = useYoutubeApi();
	const { isLoading, error, data } = useQuery(['videos', keyword], () => youtube.search(keyword), {
		staleTime: 1000 * 60 * 5,
	});

	return (
		<BackGroundColor>
			{isLoading && <div className={styles.loader}>Loading...</div>}
			{error && (
				<ErrorImg>
					<img
						src="https://www.nicepng.com/png/detail/212-2123494_the-page-looks-great-but-i-have-trouble.png"
						alt="404Error"
						width={1000}
						height={300}
					/>
				</ErrorImg>
			)}
			{data && (
				<ul className="grid grid-cols-1 gap-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-col-5">
					{data.map(videoItem => (
						<VideoCard key={videoItem.id} videoItem={videoItem} />
					))}
				</ul>
			)}
		</BackGroundColor>
	);
}

const BackGroundColor = styled.div`
	background-color: var(--color-bg);
	color: var(--color-txt);
`;

export const ErrorImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
	background-color: var(--color-bg);
`;
