import { SWEDISH } from '../actions/action_languages';

export const mailLabel = locale => (locale === SWEDISH
	? 'Skicka mig ett mail'
	: 'Send me an email');

export const linkedinkLabel = locale => (locale === SWEDISH
	? 'Lägg till mig på LinkedIn'
	: 'Add me on LinkedIn');

export const githubLabel = locale => (locale === SWEDISH
	? 'Min GitHub-sida'
	: 'My GitHub Page');

export const language = locale => (locale === SWEDISH
	? 'Switch to English'
	: 'Byt till Svenska');

export const flag = locale => (locale === SWEDISH
	? 'https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg'
	: 'https://lipis.github.io/flag-icon-css/flags/4x3/se.svg');	
