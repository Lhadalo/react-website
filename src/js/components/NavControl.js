import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Logo from 'grommet/components/icons/Grommet';

import { navActivate } from '../actions/nav';

class NavControl extends Component {
	render() {
		const { name, nav: { active } } = this.props;

		let result;
		const title = <Title>{name || 'ola dahl'}</Title>;
		if (!active) {
			result = (<Button onClick={() => this.props.dispatch(navActivate(true))}>
				<Box
					direction='row'
					responsive={false}
					pad={{ between: 'small' }}
				>
					<Logo />
					{title}
				</Box>
			</Button>
			);
		} else {
			result = title;
		}
		return result;
	}
}

NavControl.defaultProps = {
	name: undefined,
	nav: {
		active: true, // start with nav active
		enabled: true, // start with nav disabled
		responsive: 'multiple'
	}
};
  
NavControl.propTypes = {
	dispatch: PropTypes.func.isRequired,
	name: PropTypes.string,
	nav: PropTypes.object
};

const select = state => ({
	nav: state.nav
});

export default connect(select)(NavControl);
