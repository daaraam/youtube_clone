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

// 키워드가 있으면 클래스 안에 있는 멤버함수인 프라이빗 함수인 #키를 붙여서 새로운 함수 searchByKeyword를 호출해서 keyword를 전달해주고, 없으면 mostPopular를 호출할거야.
// .then(res=>res.json())
// .then(data=>data.items) 이렇게 두줄이었는데 json으로 파싱할 필요가 없어졌으니까 res => res.data.items로 축약!

// items가 객체로 되어있으니까 그냥 받는게 아니라 map으로 우리만의 객체로 변환해줄건데, item을 낱개로 풀어서 단 하나 id를 객체가 아니라 video안에 있는 문자열로 할당해줄거야.

// 키워드를 전달받아서 async를 쓸건데

// Youtube_search 1) Json과 2)Real로 나눌거야.

// search.json의 id를 popular의 id로 덮어씌우기함. 형식이 다른걸 똑같은 포맷으로 변환해주는 것!!

// fetch는 내장되어 있어서 사용하기 간편하지만 단점이 있다. response를 매번 JSON으로 변환을 시켜줘야 하고 서버에서 반응을 하면 다 성공으로 간주한다는 것이다. 그래서 axios를 사용하는데, axios는 200대인 경우에만 성공했다고 간주하고 400같은건 catch error로 들어와서 네트워크 문제 뿐만 아니라 백엔드에서 발생하는 문제도 알아차릴 수 있다.
