import axios from 'axios';

import { 
	ROOT_URL, 
	FETCH_IMAGE, 
	FETCH_IMAGES, 
	FETCH_IMAGES_DESCRIPTION 
} from '.';

export function fetchImagesDescription() {
	const request = axios.get(`${ROOT_URL}/types/photos`);

	return {
		type: FETCH_IMAGES_DESCRIPTION,
		payload: request
	};
}

export function fetchImage(id) {
	const request = axios.get(`${ROOT_URL}/photos/${id}`);

	return {
		type: FETCH_IMAGE,
		payload: request
	};
}

export function fetchImages() {
	const request = axios.get(`${ROOT_URL}/photos`);

	return {
		type: FETCH_IMAGES,
		payload: request
	};
}
