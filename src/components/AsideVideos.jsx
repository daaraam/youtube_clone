import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AsideVideoCard from './AsideVideoCard';
import { useYoutubeApi } from './Context/YoutubeApiContext';

export default function AsideVideos({ channelId, videoItem }) {
	const { youtube } = useYoutubeApi();

	const {
		data: channelVideos,
		error,
		isLoading,
	} = useQuery(['getVideo', channelId], () => youtube.GetChannelVideos(channelId));

	return (
		<div>
			{error && <p>에러</p>}
			{isLoading && <p>로딩</p>}
			{channelVideos && (
				<ul>
					{channelVideos.map(channelVideoItem => (
						<AsideVideoCard
							channelVideoItem={channelVideoItem}
							channelId={channelId}
							videoItem={videoItem}
						/>
					))}
				</ul>
			)}
		</div>
	);
}
