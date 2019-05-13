import React from 'react';
import { SWEDISH } from '../actions/action_languages';

import ContactIcon from 'grommet/components/icons/base/Contact';
import DeployIcon from 'grommet/components/icons/base/Deploy';

const navItems = {
	SWEDISH: [
		{ path: '/projects', label: 'projekt', icon: <DeployIcon />, desc: 'Projekt jag har gjort på min fritid. Här hittar du också mitt CV.' },
		{ path: '/contact', label: 'kontakt', icon: <ContactIcon />, desc: 'Mina kontaktuppgifter. Kontakta mig gärna eller lägg till mig på LinkedIn.' }	
	],
	ENGLISH: [
		{ path: '/projects', label: 'project', icon: <DeployIcon />, desc: 'Projects I have done in my free time. Here you also find my CV.' },
		{ path: '/contact', label: 'contact', icon: <ContactIcon />, desc: 'My contact information. Please contact me or add me on LinkedIn.' }	
	]
};

export function getLinksContent(locale) {
	switch (locale) {
		case SWEDISH: return navItems.SWEDISH;
		default: return navItems.ENGLISH;
	}
}
