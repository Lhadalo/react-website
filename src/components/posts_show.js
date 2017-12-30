import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends React.Component {
	componentDidMount() {
		const { id } = this.props.match.params;		
		this.props.fetchPost(id);		
	}

	renderPost(post) {
		return(
			<div>
				<h1>{post.title.rendered}</h1>
				<div dangerouslySetInnerHTML={ {__html: post.content.rendered} } />
			</div>
		)

	}

	render() {
		const { post } = this.props;

		if(!post) {
			return <div>Loading...</div>;
		}
		return(
			<div>
				{this.renderPost(post)}
			</div>
		);
	}
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);