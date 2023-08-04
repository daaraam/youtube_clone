import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
	const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
	const navigateDetail = useNavigate();

	const goDetailPage = () => {
		navigateDetail(`/videos/watch/${video.id}`, { state: { video } });
	};

	return (
		<li onClick={() => goDetailPage()} className="cursor-pointer">
			<img className="w-full rounded-xl" src={thumbnails.medium.url} alt={title} />
			<div>
				<p className="my-2 font-semibold line-clamp-2">{title}</p>
				<p className="text-sm opacity-80">{channelTitle}</p>
				<p className="text-sm opacity-80">{formatAgo(publishedAt, 'ko')}</p>
			</div>
		</li>
	);
}
