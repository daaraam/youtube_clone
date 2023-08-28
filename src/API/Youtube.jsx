import axios from 'axios';

export default class RealYoutube {
	constructor() {
		this.httpClient = axios.create({
			baseURL: 'https://youtube.googleapis.com/youtube/v3',
			params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
		});
	}

	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}

	async #searchByKeyword(keyword) {
		return this.httpClient
			.get('search', {
				params: {
					part: 'snippet',
					maxResults: 8,
					type: 'video',
					// 이걸 안넣으면 채널을 걸러주지 않음
					q: keyword,
				},
			}) //
			.then(res => res.data.items)
			.then(items => items.map(item => ({ ...item, id: item.id.videoId })));
	}

	async #mostPopular() {
		return this.httpClient
			.get('videos', {
				params: {
					part: 'snippet',
					maxResults: 8,
					chart: 'mostPopular',
				},
			}) //
			.then(res => {
				console.log(res);
				return res.data.items;
			});
	}
}
