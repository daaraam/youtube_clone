import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ id, name }) {
	console.log('videoId', id);
	const { youtube } = useYoutubeApi();
	const {
		data: URL,
		isError,
		isLoading,
	} = useQuery(['channel', id], () => {
		youtube.ChannelImageURL(id);
	});
	return (
		<div>
			{isLoading && <p>Loading....</p>}
			{isError && <p>ERROR...</p>}
			{URL && <img src={URL} alt={name} />}
			<p className="font-bold">{name}</p>
		</div>
	);
}
