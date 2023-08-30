import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import AsideVideoCard from './AsideVideoCard';
import { useYoutubeApi } from './Context/YoutubeApiContext';

export default function AsideVideos() {
	const { youtube } = useYoutubeApi();
	const { videoId } = useParams();
	const { data: aside, error, isLoading } = useQuery(['inChannels', videoId], () => youtube.InChannelData());
	return (
		<div>
			{error && <p>에러</p>}
			{isLoading && <p>로딩</p>}
			{aside && (
				<ul>
					{aside.map((asideItem, index) => (
						<AsideVideoCard key={index} asideItem={asideItem} />
					))}
				</ul>
			)}
		</div>
	);
}
