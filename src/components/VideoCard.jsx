import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { formatAgo } from '../util/date';
import ChannelInfo from './ChannelInfo';

export default function VideoCard({ videoItem }) {
	const { thumbnails, title, channelTitle, publishedAt, channelId } = videoItem.snippet;
	const navigateDetail = useNavigate();

	const goDetailPage = () => {
		navigateDetail(`/videos/watch/${videoItem.id}`, { state: { videoItem } });
	};

	return (
		<li onClick={() => goDetailPage()} className="cursor-pointer">
			<img className="w-full rounded-xl" src={thumbnails.medium.url} alt={title} />
			<TitleBox>
				<ChannelImage>
					<ChannelInfo id={channelId} />
				</ChannelImage>
				<ChannelBox>
					<p className="my-2 font-semibold line-clamp-2">{title}</p>
					<p className="text-sm opacity-80">{channelTitle}</p>
					<p className="text-sm opacity-80">{formatAgo(publishedAt, 'ko')} </p>
				</ChannelBox>
			</TitleBox>
		</li>
	);
}
const TitleBox = styled.div`
	display: flex;
	width: 100%;
`;
export const ChannelImage = styled.p`
	width: 3rem;
	height: 3rem;
`;

const ChannelBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-left: 0.5rem;
`;
