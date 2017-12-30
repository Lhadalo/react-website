import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';

const ROOT_URL = 'http://localhost:8888/wp-json/wp/v2';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts`);

	return {
		type: FETCH_POSTS,
		payload: request
	}
}

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}`);

	return {
		type: FETCH_POST,
		payload: request
	}
}