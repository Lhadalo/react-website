import { FETCH_IMAGE, FETCH_IMAGES, FETCH_IMAGES_DESCRIPTION } from '../actions';

import { createReducer } from './utils';
import _ from 'lodash';


const initialState = {};

const handlers = {
	[FETCH_IMAGE]: (state, action) => {
		console.log('Fetch Image');
	},
	[FETCH_IMAGES]: (state, action) => {
		return _.mapKeys(action.payload.data, 'id');
	},
	[FETCH_IMAGES_DESCRIPTION]: (state, action) => {
		console.log(state);
		console.log(action);
	}
};

export default createReducer(initialState, handlers);
