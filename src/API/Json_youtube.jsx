import axios from 'axios';

export default class JsonYoutube {
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
}
