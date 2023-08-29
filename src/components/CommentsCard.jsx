import React from 'react';
import { formatAgo } from '../util/date';
import { Img } from './ChannelInfo';

export default function CommentsCard({ commentItem }) {
	const { textDisplay, authorDisplayName, authorProfileImageUrl, publishedAt } = commentItem;
	return (
		<ul className="flex p-3 gap-x-4">
			<Img src={authorProfileImageUrl} alt="name" />
			<li>
				<div className="flex items-center gap-x-2">
					<p className="font-bold">{authorDisplayName}</p>
					<p className="text-xs font-thin opacity-80">{formatAgo(publishedAt, 'ko')}</p>
				</div>
				<p>{textDisplay}</p>
			</li>
		</ul>
	);
}
