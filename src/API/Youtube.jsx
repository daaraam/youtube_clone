import axios from 'axios';

export default class Youtube {
	constructor() {
		this.httpClient = axios.create({
			baseURL: 'https://www.googleapis.com/youtube/v3',
			params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
		});
	}

	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}

	async ChannelImageURL(id) {
		return this.httpClient
			.get('channels', {
				params: {
					part: 'snippet',
					id: id,
				},
			})
			.then(res => res.data.items[0].snippet.thumbnails.url);
	}

	async #searchByKeyword(keyword) {
		return this.httpClient
			.get('search', {
				params: {
					part: 'snippet',
					maxResults: 25,
					type: 'video',
					q: keyword,
				},
			})
			.then(res => res.data.items)
			.then(items => items.map(item => ({ ...item, id: item.id.videoId })));
	}

	async #mostPopular() {
		return this.httpClient
			.get('videos', {
				params: {
					part: 'snippet',
					maxResults: 25,
					chart: 'mostPopular',
				},
			})
			.then(res => res.data.items);
	}
}
// 여기서 type은 어떤 유형의 항목을 반환할지를 지정해주는 매개변수이다. q는 검색할 키워드를 지정한다. 지금 search.json은 q=svt인 상태로 가져오고 있음!
