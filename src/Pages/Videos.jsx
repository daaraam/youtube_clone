import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
	const { youtube } = useYoutubeApi();
	// const youtube = useContext(YoutubeApiContext);
	const { keyword } = useParams();
	const { isLoading, isError, data } = useQuery(['videos', keyword], () => youtube.search(keyword));
	// search와 popular데이터를 다 여기서 관리하고 있음.
	// youtube와 json_youtube의 여부는 YoutubeApiContext에서 useYoutubeApi를 생성하면서 관리하고 있음.

	return (
		<>
			<div>{keyword ? `🔍${keyword}` : '메인페이지'}</div>
			{isLoading && <p>Loading...</p>}
			{/* 여기에 스켈레톤 넣고싶음! */}
			{isError && <p>에러가 발생했어요 😖</p>}
			{data && (
				<ul className="grid grid-cols-1 gap-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-col-5">
					{data.map(videoItem => (
						<VideoCard key={videoItem.id} videoItem={videoItem} />
					))}
				</ul>
			)}
		</>
	);
}

// useQuery는 비동기통신은 해주지만 어떻게 네트워크 통신을 해야하는지는 해결해주지 않는다. 그래서 axios 라이브러리를 사용하는데, 비동기함수의 캐싱전략은 무엇인지를 따로 빼두면 좋다.
