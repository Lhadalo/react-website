import React from 'react';
import _ from "lodash";
import { connect } from 'react-redux';
import { fetchImages, fetchImagesDescription } from '../../actions';
import { Link } from 'react-router-dom';

class Photos extends React.Component {
	
	componentWillMount() {		
		this.props.fetchImages();
		this.props.fetchImagesDescription();
	}

	renderPhotosDescription() {
		const { photos_info } = this.props;
		if(photos_info) {
			return (
				<div className="text-center">
					<h2>photos</h2>
					<hr/>
				</div>
			)
		}
	}

	renderPhotos() {
		return _.map(this.props.photos, photo => {
			return(
				<Link to={`/photos/${photo.id}`} className="list-group-item flex-column align-items-start" key={photo.id}>
						<div className="d-flex w-100">
							<img src={photo.acf.photos_description[0].photo.sizes.thumbnail} className="img-list"/>
							<div className="d-flex w-100 justify-content-between img-list-desc">
								<div>
									<h5 className="">{photo.title.rendered}</h5>
									<div dangerouslySetInnerHTML={{ __html: photo.content.rendered }} />
								</div>
								<small>{photo.acf.date}</small>
							</div>
						</div>
				</Link>
			);
		});
	}

	render() {		
		// console.log(this.props.photos);
		return(
			<div className="wrapper">
				{this.renderPhotosDescription()}
				<div className="list-group photo-list">
					{this.renderPhotos()}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { 
		photos: state.photos,
		photos_info: state.photos_info
	};
}

export default connect(mapStateToProps, { fetchImages, fetchImagesDescription })(Photos);