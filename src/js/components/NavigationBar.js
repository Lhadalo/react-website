import React, { Component } from 'react';

import { navitems } from '../links';
// Grommet
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Responsive from 'grommet/utils/Responsive';

// Icons
import Logo from 'grommet/components/icons/base/BrandGrommetPath';

class NavigationBar extends Component {
	constructor() {
		super();
		this._onResponsive = this._onResponsive.bind(this);
		this.state = {};
	}

	componentDidMount() {
		Responsive.start(this._onResponsive);
	}

	_onResponsive(small) {
		this.setState({ small });
	}

	render() {
		const links = navitems.map(page => (
				<Box key={page.label} pad='small'>
					<Anchor
						className='subpath'  
						path={page.path} 
						label={page.label} 
						align='center'
						icon={page.icon} />
				</Box>
		));
		
		return (
			<Header colorIndex='light-1' fixed={true} size='small' className='Header'>
		
				<Box pad='small'>
					<Anchor 
						path='/' 
						animateIcon={!this.state.small} 
						icon={<Logo colorIndex='brand' size='medium' />} 
						label='ola dahl.' 
						primary={true} 
						align='start'
						style={{ textDecoration: 'none' }} />	
				</Box>
			
				<Box margin='small' flex={true} justify='start' direction='row' responsive={false} className='DesktopOnly'>
					{links}
				</Box>
			</Header>
		);
	}
}

export default NavigationBar;
