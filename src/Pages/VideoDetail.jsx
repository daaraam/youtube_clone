import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import AsideVideos from '../components/AsideVideos';
import ChannelInfo from '../components/ChannelInfo';
import Comments from '../components/Comments';
import { formatAgo } from '../util/date';

export default function VideoDetail() {
	const {
		state: { videoItem },
	} = useLocation();
	console.log('videoState', videoItem);

	const { title, channelId, channelTitle, description, publishedAt, id } = videoItem.snippet;
	// 여기서 아는 정보 :
	return (
		<Section className="flex flex-col px-10 gap-x-3 lg:flex-row">
			<article className="basis-4/6">
				<iframe
					className="rounded-xl"
					id="player"
					type="text/html"
					width="100%"
					height="500"
					src={`http://www.youtube.com/embed/${videoItem.id}?autoplay=1`}
					frameborder="0"
					allowFullScreen
				/>
				<DetailTextBox>
					<div className="w-full my-1 text-2xl font-bold line-clamp-2">{title}</div>
					<ChannelInfo id={channelId} name={channelTitle} />
					<DetailText expanded={true} className="p-2 rounded-xl line-clamp-3">
						<p>{formatAgo(publishedAt)}</p>
						{description}
					</DetailText>
				</DetailTextBox>
				<Comments />
			</article>

			<aside className="flex basis-2/6">
				<AsideVideos channelId={channelId} />
			</aside>
		</Section>
	);
}

const Section = styled.section`
	color: var(--color-txt);
`;

const DetailTextBox = styled.div`
	padding-bottom: 3rem;
`;

const DetailText = styled.div`
	margin-top: 1rem;
	width: 100%;
	background-color: var(--color-border);
	transition: height 0.3s ease;
	height: 5.8rem;
	padding: 1rem;
`;
