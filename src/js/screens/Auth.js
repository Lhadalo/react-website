/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { connect } from 'react-redux';

import { auth, logout } from '../actions/action_auth';

// Grommet
import Box from 'grommet/components/Box';
import LoginForm from 'grommet/components/LoginForm';

class Admin extends React.Component {

	authenticate(authValues) {
		this.props.onAuth(authValues.username, authValues.password);
	}

	renderAdminContent() {
		return (
				<div>
					<span>Inloggad!</span>
					<button onClick={this.props.onLogout}>Logga ut</button>
				</div>
		);
	}

	render() {
		let content = <LoginForm onSubmit={this.authenticate.bind(this)} />;

		if (this.props.isAuthenticated) {
			content = this.renderAdminContent();
		}

		return (
			<Box align='center'>
				{content}
			</Box>);
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuthenticated: state.auth.token != null,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (email, password) => dispatch(auth(email, password)),
		onLogout: () => dispatch(logout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
