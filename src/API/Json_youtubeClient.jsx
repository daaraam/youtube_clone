import axios from 'axios';

export default class JsonYoutube {
	async search() {
		return axios.get('/videos/search.json');
	}
	async videos() {
		return axios.get('/videos/popular.json');
	}
	async channels() {
		return axios.get('/videos/channel.json');
	}
	async comments() {
		return axios.get('/videos/comment.json');
	}
	async inChannels() {
		return axios.get('/videos/inChannel.json');
	}
}
