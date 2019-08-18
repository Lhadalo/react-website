/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { connect } from 'react-redux';

import { auth, logout } from '../actions/action_auth';
import { uploadImage } from '../actions/action_images';

// Grommet
import Box from 'grommet/components/Box';
import LoginForm from 'grommet/components/LoginForm';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Select from 'grommet/components/Select';

class Admin extends React.Component {
	constructor() {
		super();
		this.state = {
			image_title: '',
			image_desc: '',
			image: null,
			url: ''
		};

		this.handleFieldChange = this.handleFieldChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAddAlbum = this.handleAddAlbum.bind(this);
	}
	
	authenticate(authValues) {
		this.props.onAuth(authValues.username, authValues.password);
	}

	handleFileChange(e) {
		const image = e.target.files[0];
		if (image) {
			this.setState({ image });
		}
	}

	handleUpload() {
		this.props.onUploadImage(this.state.image);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onUploadImage(this.state.image_title, this.state.image_desc, this.state.image);
	}

	handleFieldChange(event) {
		const { name, value, files } = event.target;
		switch (name) {
			case 'image_title': this.setState({ image_title: value }); break; 
			case 'description': this.setState({ image_desc: value }); break;
			case 'file': this.setState({ image: files[0] }); break;
			default: console.log('error'); break;
		}
		console.log(this.state.image_title);
	}

	handleAddAlbum(e) {
		e.preventDefault();
		console.log('Add Album');
	}

	// TODO Skapa fotoalbum för att lägga till bilder i.
	renderPhotosPanel() {
		return (
				<form>
					<p>Album</p>
					<Box pad={{ vertical: 'small' }}>
						<Select options={['one', 'two', 'three', 'four']} value='one' />
					</Box>
					<Box direction='row' justify='around' pad={{ vertical: 'small' }}>
						<input type='text' />
						<button onClick={this.handleAddAlbum}>+</button>
					</Box>
					<p>Bilder i album</p>
					<Box>
						<input name='image_title' type='text' placeholder='Image Name' onChange={this.handleFieldChange} />
						<textarea name='description' type='text' placeholder='Image Description' onChange={this.handleFieldChange} />
						<input name='file' type='file' onChange={this.handleFieldChange} />
					</Box>
					<button onClick={this.handleSubmit}>Upload</button>
					{/* <input type='submit' value='Upload' /> */}
				</form>
		);
	}

	renderBlogpostsPanel() {
		return (
			<p>Blogposter Lorem ipsum dolor sit amet</p>
		);
	}

	renderAdminContent() {
		return (
			<Box full={{ horizontal: true }} pad='medium' >
				<Accordion active='0'>
					<AccordionPanel heading='Fotoalbum'>
						{this.renderPhotosPanel()}
					</AccordionPanel>
					<AccordionPanel heading='Blogposter'>
						{this.renderBlogpostsPanel()}
					</AccordionPanel>
				</Accordion>
				<Box align='center'>
				<button onClick={this.props.onLogout}>Logout</button>
				</Box>
			</Box>
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
		onLogout: () => dispatch(logout()),
		onUploadImage: (title, description, image) => dispatch(uploadImage(title, description, image)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
