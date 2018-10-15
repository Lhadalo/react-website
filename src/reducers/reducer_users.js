import { FETCH_USERS } from "../actions/index";


export default function(state = null, action) {
	switch (action.type) {
		case FETCH_USERS:
			const user = action.payload.data[0];
			const newState = {...state}
			newState.name = user.name;
			newState.description = user.description;
			return newState;
		
		default:
			return state;
	}
}