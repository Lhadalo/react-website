import { SWEDISH } from '../actions/action_languages';


const contactItems = {
	ENGLISH: [
		{
			title: 'email',
			links: [{ path: 'mailto:oladahl.lel@gmail.com', label: 'oladahl.lel@gmail.com' }]
		},
		{
			title: 'phone',
			links: [{ path: 'tel:+46734013044', label: '+46734013044' }]
		},
		{
			title: 'internet',
			links: [{ path: '#', label: 'github' }, { path: '#', label: 'linkedin' }]
		},
	],
	SWEDISH: [
		{
			title: 'email',
			links: [{ path: 'mailto:oladahl.lel@gmail.com', label: 'oladahl.lel@gmail.com' }]
		},
		{
			title: 'telefon',
			links: [{ path: 'tel:+46734013044', label: '+46734013044' }]
		},
		{
			title: 'internet',
			links: [{ path: '#', label: 'github' }, { path: '#', label: 'linkedin' }]
		},
	]
};

export function getPageTitle(locale) {
	switch (locale) {
		case SWEDISH: return 'Kontakta mig gärna, eller lägg till mig på LinkedIn';
		default: return 'Please contact me, or add me on LinkedIn';
	}
}

export function getContactItems(locale) {
	switch (locale) {
		case SWEDISH: return contactItems.SWEDISH;
		default: return contactItems.ENGLISH;
	}
}

export const pageTitle = locale => (locale === SWEDISH 
	? 'Kontakta mig gärna, eller lägg till mig på LinkedIn' 
	: 'Please contact me, or add me on LinkedIn');

export const contactTitle = locale => (locale === SWEDISH ? 'kontakta mig' : 'contact me');
export const formNameLabel = locale => (locale === SWEDISH ? 'namn' : 'name');
export const formEmailLabel = locale => (locale === SWEDISH ? 'epost' : 'email');
export const formMessageLabel = locale => (locale === SWEDISH ? 'medellande' : 'message');
export const formNameError = locale => (locale === SWEDISH ? 'Vänligen ange ditt namn' : 'Please enter your name');
export const formEmailError = locale => (locale === SWEDISH ? 'Vänligen ange din epost' : 'Please enter your email');
export const formMessageError = locale => (locale === SWEDISH ? 'Vänligen skriv ett meddelande' : 'Please enter a message');
export const formSubmitButton = locale => (locale === SWEDISH ? 'Skicka' : 'Send');
export const toastFeedback = locale => (locale === SWEDISH ? 'Ditt meddelande har skickats! Jag hör av mig så fort som möjligt.' : 'Your message was sent. I will reply as soon as possible');
