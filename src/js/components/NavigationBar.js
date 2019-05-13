import React, { Component } from 'react';

import { changeLanguage } from '../actions/action_languages';
import { connect } from 'react-redux';
import { getLinksContent } from '../translation/links';

// import { navitems } from '../links';
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
		this._onClickLanguage = this._onClickLanguage.bind(this);
		this.state = {};
	}


	componentDidMount() {
		Responsive.start(this._onResponsive);
	}

	_onResponsive(small) {
		this.setState({ small });
	}

	_onClickLanguage() {
		this.props.onChangeLanguage();
	}

	render() {
		const linkContent = getLinksContent(this.props.language);

		const links = linkContent.map(page => (
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
		
				<Box pad='small' alignContent='center'>
					<Anchor 
						path='/' 
						animateIcon={!this.state.small} 
						icon={<Logo colorIndex='brand' size='medium' />} 
						label='ola dahl.' 
						primary={true} 
						align='start'
						style={{ textDecoration: 'none' }} />	
				</Box>
			
				<Box margin='small' flex={false} justify='start' direction='row' responsive={false} className='DesktopOnly'>
					{links}
				</Box>

				<Box margin='small' pad={{ horizontal: 'medium' }}flex={!this.state.small} justify='end' direction='row' responsive={false}>
					<Anchor label='SV' onClick={this._onClickLanguage} />
				</Box>
			</Header>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    language: state.language.language
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
		onChangeLanguage: () => dispatch(changeLanguage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
