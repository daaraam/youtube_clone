import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { styled } from 'styled-components';
import Icon from './Icon';

const SpeechRecognitionApp = ({ speech, setSpeech }) => {
	const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

	const speechSearchToggle = () => {
		setSpeech(prevState => !prevState);
	};
	const navigate = useNavigate();
	const handleSpeechResult = () => {
		navigate(`/videos/${transcript}`);
		speechSearchToggle();
	};

	return (
		<Container>
			<SpeechBar>
				<CloseBtn>
					<Icon icon={<AiOutlineClose size={25} />} onClick={speechSearchToggle} />
				</CloseBtn>
				<p>{transcript}</p>
				{listening ? (
					<Listening>
						<BsFillMicFill onClick={SpeechRecognition.startListening} size={40} />
					</Listening>
				) : (
					<Icon icon={<BsFillMicFill size={40} />} onClick={SpeechRecognition.startListening} />
				)}
				<p>{listening ? '듣는 중!' : '마이크를 탭하세요.'}</p>
				{/* 검색버튼 대신에 일정시간이 지나면 
                자동으로 handleSpeechResult 함수가 실행되게 하는법..? */}
				<button onClick={handleSpeechResult}>검색</button>
			</SpeechBar>
		</Container>
	);
};

export default SpeechRecognitionApp;

const Container = styled.div`
	position: fixed;
	display: flex;
	justify-content: space-around;
	/* align-items: center; */
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 1;
`;

const SpeechBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background-color: white;
	width: 30rem;
	height: 25rem;
	padding: 2vw;
	position: fixed;
	top: 0.5rem;
	box-shadow: 3px 20px 20px -1px rgba(0, 0, 0, 0.44);
	-webkit-box-shadow: 3px 20px 20px -1px rgba(0, 0, 0, 0.44);
	-moz-box-shadow: 3px 20px 20px -1px rgba(0, 0, 0, 0.44);
`;

const CloseBtn = styled.span`
	position: fixed;
	display: flex;
	width: 30rem;
	justify-content: flex-end;
	top: 0;
	padding: 0.5rem;
`;

const Listening = styled.button`
	display: flex;
	align-items: center;
	padding: 0.5rem;
	margin: 0.25rem;
	border-radius: 100%;
	&:hover {
		background-color: #eeebeb;
	}
	cursor: pointer;
	background-color: #f2abab;
`;
