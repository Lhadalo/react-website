import React from 'react';

class ImageItem extends React.Component {

	render() {
		return(
			<div className="row img-item">
				<div className="col-sm">
					<img src={this.props.photo} style={{width: 100 + '%'}} />
				</div>
				<div className="col-sm">
					{this.props.description}
				</div>
			</div>
		);
	}
}

export default ImageItem;