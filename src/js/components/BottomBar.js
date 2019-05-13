import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getLinksContent } from '../translation/links';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';

class BottomBar extends Component {
	render() {
		const items = getLinksContent(this.props.language);

		const links = items.map(page => (
			<Box key={page.label} pad='small'>
				<Anchor  
					className='subpath'
					animateIcon={false}
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
		<Box colorIndex='light-1' size='large' separator='top' style={style}>
			<Box margin='medium' flex={true} justify='around' direction='row' responsive={false} >
					{links}
			</Box>
		</Box>
	);
	}
}

const mapStateToProps = (state) => {
	return {
		language: state.language.language
	};
};

export default connect(mapStateToProps)(BottomBar);
