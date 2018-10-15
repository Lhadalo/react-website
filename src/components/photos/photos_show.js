import React from 'react';

import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchImage } from '../../actions';

import ImageItem from './image_item';

class PhotosShow extends React.Component {
	
	componentWillMount() {
		this.props.fetchImage(this.props.match.params.id);
	}

	renderDescription() {
		const { photo } = this.props;
		if(photo) {
			return (
				<div>
					<h2>{photo.title.rendered}</h2>
					<div dangerouslySetInnerHTML={{ __html: photo.content.rendered }} />
				</div>
			);
		}
	}

	renderPhotos() {
		if(this.props.photo) {
			const photoItems = this.props.photo.acf.photos_description;
			// console.log(photoItems);
			return _.map(photoItems, (item, index) => {
				return(
					<div key={index}>
						<ImageItem description={item.description} photo={item.photo.sizes.large}/>
					</div>
				)
			})
		}
	}

	render() {

		if(!this.props.photo) {
			return <div>Loading...</div>
		}
		return (
			<div className="wrapper">
				{this.renderDescription()}
				<div>
					{this.renderPhotos()}
				</div>
			</div>
		)
	}
}

function mapStateToProps({photos}, ownProps) {
	return { photo: photos[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchImage })(PhotosShow);