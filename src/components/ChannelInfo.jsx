import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ id, name }) {
	const { youtube } = useYoutubeApi();
	const { data, isError, isLoading } = useQuery(['channel', id], () => {
		youtube.ChannelImageURL(id);
	});
	return (
		<div>
			{isLoading && <p>Loading....</p>}
			{isError && <p>ERROR...</p>}
			{data && <img src={data} alt={name} />}
			<p className="font-bold">{name}</p>
		</div>
	);
}
