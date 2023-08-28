import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { styled } from 'styled-components';
import { useYoutubeApi } from './Context/YoutubeApiContext';

export default function ChannelInfo({ id, name }) {
	const { youtube } = useYoutubeApi();
	const { data: url, error, isLoading } = useQuery(['channel', id], () => youtube.ChannelImageURL(id));

	return (
		<div>
			<Channel>
				{isLoading && (
					<LoadingAndErrorImg
						src={
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8aqZV6bHq0EILPMh-1UxRYht4F_KibKccw&usqp=CAU'
						}
					/>
				)}
				{error && (
					<LoadingAndErrorImg
						src={'https://i.pinimg.com/474x/4c/00/e6/4c00e6f7f7b0e2450d8a44417a132773.jpg'}
					/>
				)}
				{url && <Img src={url} alt={name} />}
				<p>{name}</p>
			</Channel>
		</div>
	);
}

const Channel = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	padding-top: 0.5rem;
`;

const Img = styled.img`
	border-radius: 100%;
	width: 2.5rem;
	height: 2.5rem;
`;

const LoadingAndErrorImg = styled.img`
	width: 3.5rem;
	height: 3rem;
	border-radius: 100%;
	margin-top: 0.5rem;
`;
