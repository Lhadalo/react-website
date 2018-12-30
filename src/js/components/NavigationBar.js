import React, { Component } from 'react';

// Grommet
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';

// Icons
import Logo from 'grommet/components/icons/base/BrandGrommetPath';
import ContactIcon from 'grommet/components/icons/base/Contact';
import DeployIcon from 'grommet/components/icons/base/Deploy';

class NavigationBar extends Component {
	constructor() {
		super();
		this.state = {
			items: [
				{ path: '/projects', label: 'projekt', icon: 'project', desc: 'Projekt jag har gjort på min fritid. Här hittar du också mitt CV.' },
				{ path: '/contact', label: 'kontakt', icon: 'contact', desc: 'Mina kontaktuppgifter. Kontakta mig gärna eller lägg till mig på LinkedIn.' }	
			]
		};
	}
	
	_getIcon(iconName) {
		switch (iconName) {
			case 'contact': return <ContactIcon />;
			default: return <DeployIcon />;
		}
	}

	render() {
		const { items } = this.state;
		const links = items.map(page => (
				<Box key={page.label} pad='small'>
					<Anchor  
						path={page.path} 
						label={page.label} 
						align='center'
						icon={this._getIcon(page.icon)} />
				</Box>
				));
		return (
			<Header colorIndex='light-1' fixed={true} size='small'>
		
				<Box pad='small'>
					<Anchor path='/' icon={<Logo colorIndex='brand' size='medium' />} label='ola dahl.' primary={true} align='start' />	
				</Box>
			
				<Box margin='small' flex={true} justify='start' direction='row' responsive={false}>
					{links}
				</Box>
				<Anchor><span><strong>SV</strong></span></Anchor>
			</Header>
		);
	}
}

export default NavigationBar;
