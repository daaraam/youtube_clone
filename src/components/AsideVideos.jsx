import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import AsideVideoCard from './AsideVideoCard';
import { useYoutubeApi } from './Context/YoutubeApiContext';

export default function AsideVideos() {
	const { keyword } = useParams();
	const { youtube } = useYoutubeApi();
	const { data: aside, error, isLoading } = useQuery(['chaSearch', keyword], () => youtube.search(keyword));

	return (
		<div>
			{error && <p>에러</p>}
			{isLoading && <p>로딩</p>}
			{aside && (
				<ul>
					{aside.map(asideItem => (
						<AsideVideoCard key={asideItem.id} videoItem={asideItem} />
					))}
				</ul>
			)}
		</div>
	);
}
