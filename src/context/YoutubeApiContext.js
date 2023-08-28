import { createContext, useContext } from 'react';
import RealYoutube from '../API/Youtube';

export const YoutubeApiContext = createContext();

const youtube = new RealYoutube(); //new FakeYoutube()
export function YoutubeApiProvider({ children }) {
	return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
	return useContext(YoutubeApiContext);
}
