import { FETCH_IMAGES_DESCRIPTION } from "../actions/index";


export default function(state = null, action) {
	switch(action.type) {
		case FETCH_IMAGES_DESCRIPTION:
			const photos_info = {
				name: action.payload.data.name,
				description: action.payload.data.description
			}	
			return photos_info;
		default:
			return state;
	}
}