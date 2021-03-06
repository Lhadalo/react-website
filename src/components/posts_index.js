import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends React.Component {
	
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return _.map(this.props.posts, post => {
			
			
			return(
				<li className="list-group-item" key={post.id}>
					<Link to={`/posts/${post.id}`}>
						<strong>{post.title.rendered}</strong>
						<div dangerouslySetInnerHTML={ {__html: post.excerpt.rendered} } />
					</Link>
				</li>
			);
		});
	}

	render() {		
		return(
			<div>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);