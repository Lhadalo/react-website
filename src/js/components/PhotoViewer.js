import React, { Component } from 'react';

import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';

import CloseIcon from 'grommet/components/icons/base/Close';

class PhotoViewer extends Component {
	render() {
		return (
			<Section className='PhotoViewer'>
				<Anchor className='PhotoViewerClose' icon={<CloseIcon />} onClick={this.props.close} />
				<Box className='PhotoViewerBox' pad='medium' full={true}>
					<Image fit='contain' full={true} src={this.props.url} />
				</Box>
				
			</Section>
		);
	}
}

export default PhotoViewer;
