import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends React.Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	renderPostDescription() {
		return (
			<div className="text-center">
					<h2>thoughts</h2>
					<hr/>
				</div>
		)
	}
	renderPosts() {
		return _.map(this.props.posts, post => {
			
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={`/posts/${post.id}`}>
						<strong>{post.title.rendered}</strong>
						<br />
						<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
					</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div className="wrapper">
				{this.renderPostDescription()}
				<ul className="list-group photo-list">
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