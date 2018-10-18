import React, { Component } from 'react';
import { connect } from 'react-redux';

import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';
import Split from 'grommet/components/Split';
import Anchor from 'grommet/components/Anchor';
import { Field, reduxForm } from 'redux-form';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';

class Contact extends Component {
  _renderContactItem(title, contactItems) {
    return (
      <Box align='center' >
        <Title>{title}</Title>
        <br />
        {contactItems.map(item => (
          <Anchor path={item.path} label={item.label} key={item.label} />
        ))}
        <br />
      </Box>
    );
  }

  _renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
    return (
      <FormField label={field.label} error={touched ? error : ''}>
        <input 
          aria-describedby='validationField'
          type='text'
          className={className}
          {...field.input}
        />
      </FormField>
    );
  }

  _renderTextArea(field) {
    const { meta: { touched, error } } = field;
    const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
    return (
      <FormField label={field.label} error={touched ? error : ''}>
        <textarea 
        type='text'
        className={className}
        {...field.input}
        />
      </FormField>
    );
  }

  _renderContactForm() {
    const { handleSubmit } = this.props;
    return (
      
        <Form onSubmit={handleSubmit(this._onSubmit.bind(this))} pad='small'>
          <FormFields>
            <Field label='name' name='name' component={this._renderField} />
            <Field label='email' name='email' component={this._renderField} />
            <Field label='message' name='message' component={this._renderTextArea} />
          </FormFields>
          <Box pad={{ vertical: 'medium' }} align='center'>
            <Button label='Send' type='submit' primary={true} />
          </Box>
        </Form>
    );
  }

  _onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <Section>
        <Box pad='medium' responsive={true}>
          <Split showOnResponsive='both' fixed={false}>
            <Box align='center' responsive={true}>
              {this._renderContactItem('email', 
                [{ path: 'mailto:oladahl.lel@gmail.com', label: 'oladahl.lel@gmail.com' }])}
              {this._renderContactItem('phone', 
                [{ path: 'tel:+46734013044', label: '+46734013044' }])}
              {this._renderContactItem('internet', 
                [{ path: '#', label: 'github' }, { path: '#', label: 'linkedin' }])}
            </Box>

            <Box align='center' responsive={true}>
              <Title>contact me</Title>
              {this._renderContactForm()}
            </Box>
          </Split>
        </Box>
      </Section>
    );
  }
}


function validate(values) {
  const errors = {};
  
  // Validate the inputs from 'values'
  if (!values.name) {
      errors.name = 'Please enter your name';
  }
  if (!values.email) {
      errors.email = 'Please enter your email';
  }
  
  if (!values.message) {
      errors.message = 'Please enter your message';
  }

  // If errors is empty, the form is fine to submit
  // If errors has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'ContactForm'
})(connect(null, null)(Contact));
