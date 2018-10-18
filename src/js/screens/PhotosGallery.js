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
import Section from 'grommet/components/Section';

import BackIcon from 'grommet/components/icons/base/LinkPrevious';

import PhotoViewer from '../components/PhotoViewer';

import { fetchImage } from '../actions/action_photos';

class PhotosShow extends Component {
	constructor() {
		super();
		this.state = {
			layerActive: false,
			imageUrl: ''
		};

		this.hideImage = this._hideImage.bind(this);
		this._navigateBack = this._navigateBack.bind(this);
	}

	componentWillMount() {
		this.props.fetchImage(this.props.match.params.id);
	}

	_navigateBack() {
		this.props.history.goBack();
	}

	_renderNavigationRow() {
		return (
			<Box direction='row' align='baseline' pad='medium'>
				<Anchor className='BackAnchor' primary={true} label='Back' icon={<BackIcon />} onClick={this._navigateBack} />
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

	_hideImage() {
		this.setState({ 
			layerActive: false,
		});
	}

	_renderPhotoViewer() {
		if (this.state.layerActive) {
			return <PhotoViewer url={this.state.imageUrl} close={this.hideImage} />;	
		}
		return null;
	}

	render() {
		return (
			<Section>
				{this._renderPhotoViewer()}
				<Split flex='right' fixed={false}>
					<Box pad='medium'>
						{this._renderNavigationRow()}
						{this._renderGalleryDescription()}
					</Box>
					<Box align='center' pad='medium'>
						{this._renderImages()}
					</Box>
				</Split>
			</Section>
		);
	}
}

function mapStateToProps({ photos }, ownProps) {
	return { photo: photos[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchImage })(PhotosShow);
