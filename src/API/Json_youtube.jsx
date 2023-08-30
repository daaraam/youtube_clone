import axios from 'axios';

export default class FakeYoutube {
	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}

	async #searchByKeyword() {
		return axios
			.get(`/youtube/search.json`)
			.then(res => res.data.items)
			.then(items => items.map(item => ({ ...item, id: item.id.videoId })));
	}

	async #mostPopular() {
		return axios.get(`/youtube/popular.json`).then(res => res.data.items);
	}

	async ChannelImageURL() {
		return axios.get(`/youtube/channel.json`).then(res => res.data.items[0].snippet.thumbnails.default.url);
	}

	async CommentData() {
		return axios
			.get(`/youtube/comment.json`)
			.then(res => res.data.items.map(item => item.snippet.topLevelComment.snippet));
	}

	async GetChannelVideos() {
		return axios.get(`/youtube/popular.json`).then(res => res.data.items.map(item => item.snippet));
	}
}
