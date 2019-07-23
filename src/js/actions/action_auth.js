/* eslint-disable no-undef */
/* eslint-disable object-shorthand */
import axios from 'axios';

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'LOGOUT';

const ID_TOKEN = 'idToken';
const USER_ID = 'userId';
const EXPIRATION_DATE = 'expiration_date';
const signInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
const firebaseKey = 'AIzaSyCMODAi04B9ZB51M5mmiOLy75Nnf5tKHgc';

const authStart = () => {
	return {
		type: AUTH_START
	};
};

const authSuccess = (token, userId) => {
	return {
		type: AUTH_SUCCESS,
		token,
		userId
	};
};

const authFail = (error) => {
	return {
		type: AUTH_FAIL,
		error: error
	};
};

export const logout = () => {
	localStorage.removeItem(ID_TOKEN);
	localStorage.removeItem(USER_ID);
	localStorage.removeItem(EXPIRATION_DATE);
	return {
		type: AUTH_LOGOUT
	};
};

const authFutureLogout = (expirationTime) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(logout());
		}, expirationTime * 1000);
	};
};

const persistLoginCredentials = (token, localId, expiresIn) => {
	localStorage.setItem(ID_TOKEN, token);
	localStorage.setItem(USER_ID, localId);
	localStorage.setItem(EXPIRATION_DATE, new Date((new Date().getTime() + (expiresIn * 1000))));
};

export const authCheckState = () => {
	return (dispatch) => {
		const token = localStorage.getItem(ID_TOKEN);
		if (!token) {
			dispatch(logout());
		} else {
			const expirationDate = new Date(localStorage.getItem(EXPIRATION_DATE));
			if (expirationDate > new Date()) {
				const userId = localStorage.getItem(USER_ID);
				dispatch(authSuccess(token, userId));
				dispatch(authFutureLogout((expirationDate.getTime() - new Date().getTime()) / 1000));
			} else {
				dispatch(logout());
			}
		}
	};
};

export const auth = (email, password) => {
	return (dispatch) => {
		dispatch(authStart());

		const authData = {
			email,
			password,
			returnSecureToken: true
		};

		axios.post(`${signInUrl}${firebaseKey}`, authData)
		.then((response) => {
			const { idToken, localId, expiresIn } = response.data;
			dispatch(authSuccess(idToken, localId));
			dispatch(authFutureLogout(expiresIn));
			persistLoginCredentials(idToken, localId, expiresIn);
		})
		.catch((error) => {
			dispatch(authFail(error));
		});
	};
};
