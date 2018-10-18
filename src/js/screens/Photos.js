import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

import { fetchImagesDescription, fetchImages } from '../actions/action_photos';

class Photos extends Component {
	componentWillMount() {
		this.props.fetchImages();
	}

	_renderGalleryTiles() {
		return _.map(this.props.photos, (photo) => {
			const description = photo.content.rendered;
			const subDesc = description.substring(3, description.length - 5);
			return (
				<Anchor className='GalleryAnchor' path={`/photos/gallery/${photo.id}`} key={photo.id}>
					<Box className='TileBox' align='center' direction='row'>
						<Image className='TileImage' src={photo.acf.photos_description[0].photo.sizes.thumbnail} />
						<Box align='start' full={true} pad='small'>
							<Paragraph margin='none'><strong>{photo.title.rendered}</strong></Paragraph>
							<Paragraph margin='none'>{subDesc}</Paragraph>
						</Box>						
					</Box>
			</Anchor>
			);
		});
	}
	
	render() {
		return (
		<Box pad='medium'>
			<Section pad='medium' >
				<span>Photos from my life I take with my Pixel 2 phone.</span>
			</Section>
			
			<Section pad='medium'>
				<h4><strong>Galleries</strong></h4>
				<Tiles className='GalleryTiles' flush={true}>
					{this._renderGalleryTiles()}
				</Tiles>
				<hr />
			</Section>
			<Section>
				<Tiles fill={true} flush={false}>
					<Tile basis='1/4'>
						<Image src='https://static.vinepair.com/wp-content/uploads/2017/06/ind-internal.jpg' />
					</Tile>
					<Tile basis='1/4'>
						<Image src='https://static.vinepair.com/wp-content/uploads/2017/06/ind-internal.jpg' />
					</Tile>
					<Tile basis='1/4'>
						<Image src='https://static.vinepair.com/wp-content/uploads/2017/06/ind-internal.jpg' />
					</Tile>
					<Tile basis='1/4'>
						<Image src='https://static.vinepair.com/wp-content/uploads/2017/06/ind-internal.jpg' />
					</Tile>
					<Tile basis='1/4'>
						<Image src='https://static.vinepair.com/wp-content/uploads/2017/06/ind-internal.jpg' />
					</Tile>
					<Tile basis='1/4'>
						<Image src='https://static.vinepair.com/wp-content/uploads/2017/06/ind-internal.jpg' />
					</Tile>
					<Tile basis='1/4'>
						<Image src='https://static.vinepair.com/wp-content/uploads/2017/06/ind-internal.jpg' />
					</Tile>
				</Tiles>
			</Section>
		</Box>
		);
	}
}

function mapStateToProps(state) {
	return {
		photos: state.photos
	};
}

export default connect(mapStateToProps, { fetchImagesDescription, fetchImages })(Photos);
