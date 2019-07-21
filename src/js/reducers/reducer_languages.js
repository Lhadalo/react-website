import { GET_LANGUAGE, CHANGE_LANGUAGE } from '../actions/action_languages';

const initialState = {
	language: null
};

const getLanguage = (state, action) => {
	return { ...state, language: action.payload };
};

const changeLanguage = (state, action) => {
	return { ...state, language: action.payload };
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LANGUAGE: return getLanguage(state, action);
		case CHANGE_LANGUAGE: return changeLanguage(state, action);
		default: return state;
	}
};

export default reducer;
