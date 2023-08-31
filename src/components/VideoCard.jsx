import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { formatAgo } from '../util/date';
import ChannelInfo from './ChannelInfo';

export default function VideoCard({ videoItem, type }) {
	const { thumbnails, title, channelTitle, publishedAt, channelId } = videoItem.snippet;
	const navigate = useNavigate();
	const isList = type === 'list';

	return (
		<li
			onClick={() => {
				navigate(`/videos/watch/${videoItem.id}`, { state: { videoItem } });
			}}
			className={isList ? 'flex px-1 py-1 cursor-pointer' : ''}
		>
			<img
				className={isList ? 'w-2/4 rounded-md' : 'w-full rounded-xl'}
				src={thumbnails.medium.url}
				alt={title}
			/>
			<div className="flex w-full">
				<ChannelImage className={isList ? 'hidden' : ''}>
					<ChannelInfo id={channelId} />
				</ChannelImage>
				<ChannelBox>
					<p className="my-2 font-semibold line-clamp-2">{title}</p>
					<p className="text-sm opacity-80">{channelTitle}</p>
					<p className="text-sm opacity-80">{formatAgo(publishedAt, 'ko')} </p>
				</ChannelBox>
			</div>
		</li>
	);
}
export const ChannelImage = styled.p`
	width: 3rem;
	height: 3rem;
`;

export const ChannelBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-left: 0.5rem;
`;
