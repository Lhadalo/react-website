import React from 'react';

import ContactIcon from 'grommet/components/icons/base/Contact';
import DeployIcon from 'grommet/components/icons/base/Deploy';

export const navitems = [
	{ path: '/projects', label: 'projekt', icon: <DeployIcon />, desc: 'Projekt jag har gjort på min fritid. Här hittar du också mitt CV.' },
	{ path: '/contact', label: 'kontakt', icon: <ContactIcon />, desc: 'Mina kontaktuppgifter. Kontakta mig gärna eller lägg till mig på LinkedIn.' }	
];
