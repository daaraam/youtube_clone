import axios from 'axios';

export function search(keyword) {
	return axios.get(`/youtube/${keyword ? 'search' : 'popular'}.json`).then(res => {
		console.log('response', res);
		return res.data.items;
	});
}
