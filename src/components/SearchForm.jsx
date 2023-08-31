import React, { useEffect, useState } from 'react';
import { BsFillMicFill, BsSearch } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Icon from './Icon';
import SpeechRecognitionApp from './SpeechRecognition';

export default function SearchForm() {
	const navigate = useNavigate();
	const [text, setText] = useState('');
	const { keyword } = useParams();

	const [speech, setSpeech] = useState(false);

	useEffect(() => setText(keyword || ''), [keyword]);

	const submitHandler = e => {
		e.preventDefault();
		navigate(`/videos/${text}`);
	};
	return (
		<>
			<Form onSubmit={submitHandler} className="flex items-center justify-center gap-x-1 rounded-3xl">
				<SearchBar
					className="flex items-center w-full p-2 text-xl outline-none"
					type="text"
					value={text}
					placeholder="검색"
					onChange={e => setText(e.target.value)}
				/>
				<div className="flex items-center justify-center mr-1">
					<Icon onClick={submitHandler} icon={<BsSearch className="cursor-pointer" size={20} />} />
					<Icon
						onClick={() => setSpeech(!speech)}
						icon={<BsFillMicFill className="cursor-pointer" size={20} />}
					/>
				</div>
			</Form>
			{speech && <SpeechRecognitionApp speech={speech} setSpeech={setSpeech} />}
		</>
	);
}

const Form = styled.form`
	border: 1px solid var(--color-border);
	&:focus-within {
		border: 3px solid red;
	}
	width: 50%;
	@media (max-width: 768px) {
		margin-top: 1rem;
		justify-content: center;
		width: 100%;
	}
`;

const SearchBar = styled.input`
	background-color: var(--color-bg);
	margin-left: 1.5rem;
	&:focus-within {
		padding-left: 1rem;
	}
`;
