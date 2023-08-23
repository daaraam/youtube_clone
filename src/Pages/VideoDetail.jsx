import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
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
					id="player"
					type="text/html"
					width="100%"
					height="640"
					src={`http://www.youtube.com/embed/${videoItem.id}`}
					frameborder="0"
				/>
				<div>
					<h2 className="text-2xl font-bold">{title}</h2>
					<ChannelInfo id={channelId} name={channelTitle} />
					{/* ChannelInfo라는 컴포넌트에 전달해줄 정보 */}
					<p>{formatAgo(publishedAt, 'ko')}</p>
					<pre className="line-clamp-3">{description}</pre>
				</div>
			</article>
			<section>
				<RelatedVideos id={videoItem.id} />
			</section>
		</section>
	);
}
