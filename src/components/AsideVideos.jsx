import { useQuery } from '@tanstack/react-query';
import React from 'react';
import styles from '../Pages/Loading.module.css';
import { ErrorImg } from '../Pages/Videos';
import { useYoutubeApi } from './Context/YoutubeApiContext';
import VideoCard from './VideoCard';

export default function AsideVideos({ channelId }) {
	const { youtube } = useYoutubeApi();

	const {
		data: channelVideos,
		error,
		isLoading,
	} = useQuery(['getVideo', channelId], () => youtube.GetChannelVideos(channelId),{ staleTime: 1000 * 60 * 5 });

	return (
		<div>
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
			{channelVideos && (
				<ul>
					{channelVideos.map(videoItem => (
						<VideoCard key={videoItem.id} videoItem={videoItem} type="list" />
					))}
				</ul>
			)}
		</div>
	);
}
