import React, { Component } from 'react';

import { navitems } from '../links';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';

class BottomBar extends Component {
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

	const style = {
		position: 'fixed',
		bottom: '0',
		left: '0'
	};

	return (
		<Box colorIndex='light-1' fixed={true} size='large' separator='top' style={style}>
			<Box margin='medium' flex={true} justify='around' direction='row' responsive={false} >
					{links}
				</Box>
		</Box>
	);
	}
}

export default BottomBar;
