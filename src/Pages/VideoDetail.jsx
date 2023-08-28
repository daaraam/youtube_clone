import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import ChannelInfo from '../components/ChannelInfo';
import { formatAgo } from '../util/date';

export default function VideoDetail() {
	const {
		state: { videoItem },
	} = useLocation();
	console.log('videoState', videoItem);

	const { title, channelId, channelTitle, description, publishedAt } = videoItem.snippet;
	// 여기서 아는 정보 :
	return (
		<section>
			<article>
				<iframe
					className="rounded-xl"
					id="player"
					type="text/html"
					width="720"
					height="405"
					src={`http://www.youtube.com/embed/${videoItem.id}?autoplay=1`}
					frameborder="0"
					allowFullScreen
				/>
				<DetailTextBox>
					<Title className="text-2xl font-bold line-clamp-2">{title}</Title>
					<ChannelInfo id={channelId} name={channelTitle} />
					<DetailText expanded={true} className="p-2 rounded-xl line-clamp-2">
						<p>{formatAgo(publishedAt)}</p>
						{description}
					</DetailText>
				</DetailTextBox>
			</article>
		</section>
	);
}

const DetailTextBox = styled.div``;

const Title = styled.p`
	width: 720px;
	margin-top: 1rem;
`;

const DetailText = styled.div`
	margin-top: 1rem;
	width: 720px;
	background-color: #eeeeee;
	transition: height 0.3s ease;
	&:hover {
		filter: brightness(95%);
		height: ${({ expanded }) => (expanded ? '8rem' : '4rem')};
	}
`;
