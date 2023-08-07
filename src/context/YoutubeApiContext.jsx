import { createContext, useContext } from 'react';
import JsonYoutube from '../API/Json_youtube';
// import Youtube from '../API/Youtube';

export const YoutubeApiContext = createContext();

// youtube인스턴스
const youtube = new JsonYoutube(); //JSON데이터 사용
// const youtube = new Youtube(); //실제 API 사용

// App.js에서 SearchHeader를 제외한 전체에 씌워줌 = api 데이터를 받아올 영역 지정
export function YoutubeApiProvider({ children }) {
	return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
	return useContext(YoutubeApiContext);
}
