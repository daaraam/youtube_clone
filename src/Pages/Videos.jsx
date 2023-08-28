import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import styles from './Loading.module.css';

export default function Videos() {
	const { keyword } = useParams();
	const { youtube } = useYoutubeApi();
	const { isLoading, error, data } = useQuery(['videos', keyword], () => youtube.search(keyword));

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
						// 이렇게 map을 다른 컴포넌트에다가 뿌려주는게 가능하다!
					))}
				</ul>
			)}
		</BackGroundColor>
	);
}

// useQuery는 비동기통신은 해주지만 어떻게 네트워크 통신을 해야하는지는 해결해주지 않는다.
// 그래서 axios 라이브러리를 사용하는데, 비동기함수의 캐싱전략은 무엇인지를 따로 빼두면 좋다.

const BackGroundColor = styled.div`
	background-color: var(--color-bg);
	color: var(--color-txt);
`;

const ErrorImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
	background-color: var(--color-bg);
`;
