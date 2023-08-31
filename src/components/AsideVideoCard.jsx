import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';
import { ChannelBox } from './VideoCard';

export default function AsideVideoCard({ channel }) {
	const { title, publishedAt, thumbnails, channelTitle } = channel.snippet;
	const navigateDetail = useNavigate();

	const AsideVideoDetailPage = () => {
		navigateDetail(`/videos/watch/${channel.id}`);
	};

	return (
		<li onClick={() => AsideVideoDetailPage()} className="flex px-1 py-1 cursor-pointer">
			<img className="w-2/4 rounded-md" src={thumbnails.medium.url} alt={title} />
			<div className="flex w-full">
				<ChannelBox>
					<p className="my-2 line-clamp-2">{title}</p>
					<p className="text-sm opacity-60">{channelTitle}</p>
					<p className="text-sm opacity-60">{formatAgo(publishedAt, 'ko')} </p>
				</ChannelBox>
			</div>
		</li>
	);
}
