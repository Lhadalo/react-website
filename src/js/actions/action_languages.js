/* eslint-disable no-undef */
const KEY = 'language';
export const SWEDISH = 'sv';
export const ENGLISH = 'en';

export const GET_LANGUAGE = 'ACTION_GET_LANGUAGE';
export const CHANGE_LANGUAGE = 'ACTION_CHANGE_LANGUAGE';


export function getLanguage() {
	let language = localStorage.getItem(KEY);
	if (language == null) {
		const browserLang = (navigator.languages && navigator.languages[0]) 
		|| navigator.language || navigator.userLanguage;
		switch (browserLang) {
			case 'sv-SE': language = SWEDISH; break;
			case 'en-US': language = ENGLISH; break;
			default: language = ENGLISH;
		}
		localStorage.setItem(KEY, language);
	} 

	console.log(language);

	return {
		type: GET_LANGUAGE,
		payload: language
	};
}

export function changeLanguage() {
	let language = localStorage.getItem(KEY);
	language = (language === SWEDISH) ? ENGLISH : SWEDISH;

	localStorage.setItem(KEY, language);
	
	return {
		type: CHANGE_LANGUAGE,
		payload: language
	};
}
