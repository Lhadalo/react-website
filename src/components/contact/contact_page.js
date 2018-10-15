import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { sendContactItem } from '../../actions';
import { connect } from 'react-redux';

class Contact extends React.Component {

	renderContactDescription() {
		return (
			<div>
				<h2>contact.</h2>
				<hr/>
			</div>
		)
	}

	renderEmailItem() {
		return (
			<div >
				<h3>email</h3>
				oladahl.lel@gmail.com
			</div>
		)
	}

	renderPhoneItem() {
		return (
			<div>
				<h3>phone</h3>
				+46734013044
			</div>
		)
	}

	renderInternetItems() {
		return (
			<div>
				<h3>internet</h3>
				<p><a href="#">github</a></p>
				<p><a href="#">linkedin</a></p>
			</div>
		)
	}

	renderContactMe() {
		return (<div>
			<h3>contact me</h3>
			{this.renderContactForm()}
		</div>
		);
	}

	renderContactForm() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 
				<div>
					<Field 
					label="your name"
					name="author_name"
					component={this.renderField}
					/>
				</div>
				<br/>
				<div>
					<Field 
					label="email"
					name="author_email"
					component={this.renderField}
					/>
				</div>
				
				<br/>
				<Field 
				label="message"
				name="content"
				component={this.renderTextArea}/>
					
				<br/>
				<button type="submit" className="btn btn-primary">Send</button>
			</form>
		);
	}

	renderTextArea(field) {
		const { meta: { touched, error } } = field;
		const className = `form-control ${touched && error ? 'is-invalid' : ''}`;

		return(
			<div >
				{/*<label className="text-left">{field.label}</label>*/}
				<textarea
			
				className={className}
				type="text"
				placeholder={field.label}
				aria-describedby="validationField"
				{...field.input} //... sätter alla inbyggda handler (onChange osv) till field.inputs version av dessa
				/>
				<small id="validationField" className="invalid-feedback">
                {touched ? error : ''}
                </small>
			</div>
		);
	} 

	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-control ${touched && error ? 'is-invalid' : ''}`;

		return(
			<div >
				{/*<label>{field.label}</label>*/}
				<input 
			
				className={className}
				type="text"
				placeholder={field.label}
				aria-describedby="validationField"
				{...field.input} //... sätter alla inbyggda handler (onChange osv) till field.inputs version av dessa
				/>
				<small id="validationField" className="invalid-feedback">
                {touched ? error : ''}
                </small>
			</div>
		);
	}

	onSubmit(values) {
		this.props.sendContactItem(values, (response) => {
			console.log(response);
		});
	}
	
	render() {
		return (
			<div className="wrapper text-center">
				{this.renderContactDescription()}
				<br/>
				{this.renderEmailItem()}
				<br/>	
				{this.renderPhoneItem()}
				<br/>	
				{this.renderInternetItems()}
				<br/>
				<div className="mx-auto contact-form" >
					{this.renderContactMe()}				
				</div>
			</div>
		);
	}
}

//className="d-flex justify-content-center"
function validate(values) {
    const errors = {};
    
    //Validate the inputs from 'values'
    if(!values.author_name) {
        errors.author_name = "Enter your name"
    }
    if(!values.author_email) {
        errors.author_email = "Enter your email"
    }
    
    
    if(!values.content) {
        errors.content = "Enter some content"
    }
    

    //If errors is empty, the form is fine to submit
    //If errors has any properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
	validate,
	form: 'ContactForm'
})(connect(null, {sendContactItem})(Contact));