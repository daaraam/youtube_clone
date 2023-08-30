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
					maxResults: 1,
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
					maxResults: 1,
					chart: 'mostPopular',
				},
			}) //
			.then(res => {
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

	async CommentData(videoId) {
		return this.apiClient
			.commentThreads({
				params: {
					part: 'snippet,replies',
					videoId: videoId,
				},
			})
			.then(res => res.data.items.map(item => item.snippet.topLevelComment.snippet));
	}

	async GetChannelVideos(channelId) {
		return this.apiClient
			.search({
				params: {
					part: 'snippet',
					channelId: channelId,
					type: 'video',
				},
			})
			.then(res => res.data.items.map(item => item.snippet));
	}
}
