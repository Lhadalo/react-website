import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from '../actions/action_auth';
import { updateObject } from './utils';

const initialState = {
	token: null,
	userId: null,
	error: null,
	loading: false,
};

const authStart = (state) => {
	console.log('start');
	return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
	console.log('success');
	return updateObject(state, { 
		token: action.token,
		userId: action.userId,
		error: null,
		loading: false
	});
};

const authFail = (state, action) => {
	console.log('fail');
	return updateObject(state, {
		error: action.error,
		loading: false
	});
};

const authLogout = (state) => {
	console.log('logout');
	return updateObject(state, { token: null, userId: null });
};

const reducer = (state = initialState, action) => {
	switch (action.type) { 
		case AUTH_START: return authStart(state);
		case AUTH_SUCCESS: return authSuccess(state, action);
		case AUTH_FAIL: return authFail(state, action);
		case AUTH_LOGOUT: return authLogout(state);
		default: return state;
	}
};

export default reducer;
