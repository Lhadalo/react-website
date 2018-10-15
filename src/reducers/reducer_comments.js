import { FETCH_POST_COMMENTS } from "../actions/index";

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_POST_COMMENTS:
			console.log(action.payload.data);
			return state;
		default:
		return state;
	}
}