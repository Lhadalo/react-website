import { NAV_ACTIVATE, NAV_ENABLE, NAV_RESPONSIVE } from '../actions';

import { createReducer } from './utils';

const initialState = {
active: true,
enabled: true,
responsive: 'multiple',
items: [
	// { path: '/photos', label: 'foton', icon: 'photo', desc: 'Foton jag tagit' },
	{ path: '/projects', label: 'projekt', icon: 'project', desc: 'Projekt jag har gjort på min fritid. Här hittar du också mitt CV.' },
	{ path: '/contact', label: 'kontakt', icon: 'contact', desc: 'Mina kontaktuppgifter. Kontakta mig gärna eller lägg till mig på LinkedIn.' }
]
};

const handlers = {
[NAV_ACTIVATE]: (_, action) => (
	{ active: action.active, activateOnMultiple: undefined }
),

[NAV_ENABLE]: (_, action) => (
	{ enabled: action.enabled }
),
[NAV_RESPONSIVE]: (state, action) => {
	const result = { responsive: action.responsive };
	if (action.responsive === 'single' && state.active) {
		result.active = false;
		result.activateOnMultiple = true;
	} else if (action.responsive === 'multiple' && state.activateOnMultiple) {
		result.active = true;
	}
	return result;
}
};

export default createReducer(initialState, handlers);
