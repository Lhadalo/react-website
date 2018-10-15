import _ from 'lodash';

import { FETCH_IMAGES, FETCH_IMAGE } from "../actions/index";

export default function(state={}, action) {
	switch(action.type) {
		case FETCH_IMAGES:
			return _.mapKeys(action.payload.data, 'id');
		case FETCH_IMAGE:
			const photo = action.payload.data;
			const newState = { ...state };
			newState[photo.id] = photo;
			return newState;
		default:
			return state;
	}
}