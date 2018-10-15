import axios from 'axios';


export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';

export const FETCH_IMAGES = 'fetch_images';
export const FETCH_IMAGE = 'fetch_image';
export const FETCH_IMAGES_DESCRIPTION = 'fetch_images_description';

export const FETCH_USERS = 'fetch_users';

export const CREATE_COMMENT = 'create_comment';

export const SEND_CONTACT_ITEM = 'send_contact_item';

// export const FETCH_POST_COMMENTS = 'fetch_post_comments';

const ROOT_URL = 'http://localhost:8888/wp-json/wp/v2';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts?_embed`);
	
	return {
		type: FETCH_POSTS,
		payload: request
	}
}

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}?_embed`);

	return {
		type: FETCH_POST,
		payload: request
	}
}

export function fetchImages() {
	const request = axios.get(`${ROOT_URL}/photos`);

	return {
		type: FETCH_IMAGES,
		payload: request
	}
}

export function fetchImage(id) {
	const request = axios.get(`${ROOT_URL}/photos/${id}`);

	return {
		type: FETCH_IMAGE,
		payload: request
	}
}

export function fetchImagesDescription() {
	const request = axios.get(`${ROOT_URL}/types/photos`);

	return {
		type: FETCH_IMAGES_DESCRIPTION,
		payload: request
	}
}

export function fetchUsers() {
	const request = axios.get(`${ROOT_URL}/users`);
	
	return {
		type: FETCH_USERS,
		payload: request
	}
}

export function postComment(values, postId, callback) {
	console.log(`${ROOT_URL}/comments?post=${postId}`);
	const request = axios.post(`${ROOT_URL}/comments?post=${postId}`, values)
		.then(() => callback());

	return {
		type: CREATE_COMMENT,
		payload: request
	}
}

export function sendContactItem(values, callback) {
	const request = axios.post(`${ROOT_URL}/comments`, values)
		.then((response) => callback(response));

	return {
		type: SEND_CONTACT_ITEM,
		payload: request
	}
}