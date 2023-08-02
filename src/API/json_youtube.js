import axios from 'axios';

export default class JsonYoutube {
	constructor() {}

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
// search.json의 id를 popular의 id로 덮어씌우기함. 형식이 다른걸 똑같은 포맷으로 변환해주는 것!!
