import React from 'react';

class Comment extends React.Component {

	render() {
		return(
		<div>
			<strong>{this.props.author}</strong>
			<p className="small text-muted">{this.props.date}</p>
			<div className="small" dangerouslySetInnerHTML={{ __html: this.props.content}} />
		</div>
		);
	}
}

export default Comment;