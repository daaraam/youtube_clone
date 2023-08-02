import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import JsonYoutube from '../API/json_youtube';
import VideoCard from '../components/VideoCard';

export default function Videos() {
	const { keyword } = useParams();
	const {
		isLoading,
		error,
		data: videos,
	} = useQuery(['videos', keyword], () => {
		const youtube = new JsonYoutube();
		return youtube.search(keyword);
	});
	return (
		<>
			<div>Videos {keyword ? `🔍${keyword}` : '인기동영상🔥'}</div>
			{isLoading && <p>Loading...</p>}
			{error && <p>에러가 발생했어요 😖</p>}
			{videos && (
				<ul>
					{videos.map(video => (
						<VideoCard key={video.id} VIDEO={video} />
					))}
				</ul>
			)}
		</>
	);
}
