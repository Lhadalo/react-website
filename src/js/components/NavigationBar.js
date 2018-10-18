import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Grommet
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';


// Icons
import Logo from 'grommet/components/icons/base/BrandGrommetPath';
import HomeIcon from 'grommet/components/icons/base/Home';
import ContactIcon from 'grommet/components/icons/base/Contact';
import GalleryIcon from 'grommet/components/icons/base/Gallery';
import DeployIcon from 'grommet/components/icons/base/Deploy';

import { navActivate } from '../actions/nav';

class NavigationBar extends Component {
	constructor() {
		super();
		this._onClose = this._onClose.bind(this);
		this._getIcon = this._getIcon.bind(this);
	}
	
	_onClose() {
		this.props.dispatch(navActivate(false));
	}


	_getIcon(iconName) {
		switch (iconName) {
			case 'home': return <HomeIcon />;
			case 'contact': return <ContactIcon />;
			case 'photo': return <GalleryIcon />;
			default: return <DeployIcon />;
		}
	}

	render() {
		const { nav: { items } } = this.props;

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
			<Header colorIndex='neutral-3' fixed={true} size='small'>
		
				<Box pad='small'>
					<Anchor path='/' icon={<Logo colorIndex='brand' size='medium' />} label='ola dahl.' primary={true} align='start' />	
				</Box>
			
				<Box margin='small' flex={true} justify='start' direction='row' responsive={false}>
					{links}
				</Box>
			</Header>
		);
	}
}

NavigationBar.defaultProps = {
	nav: {
		active: true, // start with nav active
		enabled: true, // start with nav disabled
		responsive: 'multiple'
	}
};

NavigationBar.propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.shape({
	items: PropTypes.arrayOf(PropTypes.shape({
		path: PropTypes.string,
		label: PropTypes.string
	}))
	})
};

function mapStateToProps(state) {
	return { nav: state.nav };
}

export default connect(mapStateToProps)(NavigationBar);
