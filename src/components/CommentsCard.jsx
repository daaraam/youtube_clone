import React from 'react';
import { formatAgo } from '../util/date';
import { Img } from './ChannelInfo';

export default function CommentsCard({ commentItem }) {
	const { textDisplay, authorDisplayName, authorProfileImageUrl, publishedAt } = commentItem;
	return (
		<ul className="flex p-2 gap-x-4">
			<Img src={authorProfileImageUrl} alt="name" />
			<li className="w-4/5">
				<div>
					<div className="flex items-center gap-x-2">
						<p className="font-bold">{authorDisplayName}</p>
						<p className="text-xs font-thin opacity-80">{formatAgo(publishedAt, 'ko')}</p>
					</div>
					<p className="">{textDisplay}</p>
				</div>
			</li>
		</ul>
	);
}
