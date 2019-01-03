import React, { Component } from 'react';

import { navitems } from '../links';
// Grommet
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';

// Icons
import Logo from 'grommet/components/icons/base/BrandGrommetPath';

class NavigationBar extends Component {
	render() {
		const links = navitems.map(page => (
				<Box key={page.label} pad='small'>
					<Anchor  
						path={page.path} 
						label={page.label} 
						align='center'
						icon={page.icon} />
				</Box>
		));
		
		return (
			<Header colorIndex='light-1' fixed={true} size='small' className='Header'>
		
				<Box pad='small'>
					<Anchor path='/' icon={<Logo colorIndex='brand' size='medium' />} label='ola dahl.' primary={true} align='start' />	
				</Box>
			
				<Box margin='small' flex={true} justify='start' direction='row' responsive={false} className='DesktopOnly'>
					{links}
				</Box>
			</Header>
		);
	}
}

export default NavigationBar;
