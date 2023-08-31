import { createContext, useContext } from 'react';
import RealYoutube from '../../API/Youtube';
import YoutubeClient from '../../API/YoutubeClient';

export const YoutubeApiContext = createContext();

const client = new YoutubeClient();
const youtube = new RealYoutube(client);

export function YoutubeApiProvider({ children }) {
	return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
	return useContext(YoutubeApiContext);
}
