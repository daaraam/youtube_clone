export default class RealYoutube {
	constructor(apiClient) {
		this.apiClient = apiClient;
	}

	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}

	async #searchByKeyword(keyword) {
		return this.apiClient
			.search({
				params: {
					part: 'snippet',
					maxResults: 4,
					type: 'video',
					// 이걸 안넣으면 채널을 걸러주지 않음
					q: keyword,
				},
			}) //
			.then(res => res.data.items)
			.then(items => items.map(item => ({ ...item, id: item.id.videoId })));
	}

	async #mostPopular() {
		return this.apiClient
			.videos({
				params: {
					part: 'snippet',
					maxResults: 4,
					chart: 'mostPopular',
				},
			}) //
			.then(res => {
				console.log(res);
				return res.data.items;
			});
	}

	async ChannelImageURL(id) {
		return this.apiClient
			.channels({
				params: {
					part: 'snippet',
					id: id,
				},
			})
			.then(res => {
				return res.data.items[0].snippet.thumbnails.default.url;
			});
	}
}
