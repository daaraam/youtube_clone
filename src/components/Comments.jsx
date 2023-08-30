import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Pages/Loading.module.css';
import { ErrorImg } from '../Pages/Videos';
import CommentsCard from './CommentsCard';
import { useYoutubeApi } from './Context/YoutubeApiContext';

export default function Comments() {
	const { videoId } = useParams();

	const { youtube } = useYoutubeApi();
	const {
		data: comment,
		error,
		isLoading,
	} = useQuery(['commentThreads', videoId], () => youtube.CommentData(videoId));

	return (
		<div>
			{isLoading && <div className={styles.loader}>Loading...</div>}
			{error && (
				<ErrorImg>
					<img
						src="https://www.nicepng.com/png/detail/212-2123494_the-page-looks-great-but-i-have-trouble.png"
						alt="404Error"
						width={1000}
						height={300}
					/>
				</ErrorImg>
			)}
			{comment && (
				<ul>
					{comment.map((commentItem, index) => (
						<CommentsCard key={index} commentItem={commentItem} />
					))}
				</ul>
			)}
		</div>
	);
}
