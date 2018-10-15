import React, { Component } from 'react';
import { fetchUsers } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class App extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	render() {
		const { user } = this.props;
		if(user) {
			return(
				<div className="wrapper">
					<h1 className="display-4 text-center">ola dahl</h1>
					<hr/>

					<div className="row img-item">
						<div className="col-sm text-center">
							<Link to="/posts">
								<h2>thoughts</h2>
							</Link>
							<Link to="/photos">
								<h2>photos</h2>
							</Link>
							<h2>projects</h2>
						</div>						
						<div className="col-sm">
							<div dangerouslySetInnerHTML={{ __html: user.description }} />
						</div>
					</div>
				</div>
			)
		}
		return <div></div>;
	}
}

function mapStateToProps(state) {
	return { user: state.users };
} 

export default connect(mapStateToProps, { fetchUsers })(App);
