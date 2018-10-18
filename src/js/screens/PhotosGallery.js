import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Title from 'grommet/components/Title';
import Image from 'grommet/components/Image';
import Layer from 'grommet/components/Layer';

import BackIcon from 'grommet/components/icons/base/LinkPrevious';

import { fetchImage } from '../actions/action_photos';

class PhotosShow extends Component {
	constructor() {
		super();
		this.state = {
			layerActive: false,
			imageUrl: null
		};
	}

	componentWillMount() {
		console.log(this.props);
		this.props.fetchImage(this.props.match.params.id);
	}

	_renderNavigationRow() {
		return (
			<Box direction='row' align='baseline' pad='medium'>
				<Anchor className='BackAnchor' primary={true} label='Back' icon={<BackIcon />} />
				<Title>{(this.props.photo) ? this.props.photo.title.rendered : ''}</Title>
			</Box>
		);
	}

	_renderGalleryDescription() {
		if (this.props.photo) {
			const description = this.props.photo.acf.photos_description[0].description;
			return (
				<Box pad='medium'>
					<Paragraph style={{ maxWidth: '400px' }}>{description}</Paragraph>				
				</Box>
			);
		}

		return '';
	}

	_renderImages() {
		if (this.props.photo) {
			const photos = this.props.photo.acf.photos_description;
			return _.map(photos, (photoItem, index) => (
				<Box key={index} margin='small' onClick={() => this._showImage(photoItem.photo.url)}>
					<Image full={true} src={photoItem.photo.sizes.large} />
					{(index !== 0 && photoItem.description) ? <Paragraph>{photoItem.description}</Paragraph> : ''} 
				</Box>		
			));
		}

		return '';
	}

	_showImage(imageUrl) {
		this.setState({ 
			layerActive: true,
			imageUrl
		});
	}

	_renderLayer() {
		if ((this.state.layerActive)) {
			return (
				<Layer 
				className='ModalLayer'
				closer={true} 
				flush={true}
				overlayClose={true} 
				onClose={() => { this.setState({ layerActive: false }); }}>
					<Box>
						<Image fit='contain' full={true} src={this.state.imageUrl} />						
					</Box>
					{/* <span style={{ margin: '50px' }}>{this.state.imageUrl}</span> */}
				</Layer>
			);
		}
		return null;
	}

	render() {
		return (
			<Box>
				{this._renderLayer()}
				<Split flex='right' fixed={true}>
					<Box pad='medium'>
						{this._renderNavigationRow()}
						{this._renderGalleryDescription()}
					</Box>
					<Box align='center' pad='medium'>
						{this._renderImages()}
					</Box>
				</Split>
			</Box>
		);
	}
}

function mapStateToProps({ photos }, ownProps) {
	return { photo: photos[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchImage })(PhotosShow);
