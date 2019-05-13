import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as translation from '../translation/contact';

import axios from 'axios';

// Grommet
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Split from 'grommet/components/Split';
import Anchor from 'grommet/components/Anchor';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  _renderContactItem(title, contactItems) {
    return (
      <Box align='center' key={title} >
        <Title style={{ fontWeight: '400' }}>{title}</Title>
        <br />
        {contactItems.map(item => (
          <Anchor href={item.path} label={item.label} key={item.label} />
        ))}
        <br />
      </Box>
    );
  }

  _renderNameField(field) {
    const { meta: { touched, error } } = field;
    return (
      <FormField label={field.label} error={touched ? error : ''}>
        <input 
          aria-describedby='validationField'
          type='text'
          {...field.input}
        />
      </FormField>
    );
  }

  _renderEmailField(field) {
    const { meta: { touched, error } } = field;
    return (
      <FormField label={field.label} error={touched ? error : ''}>
        <input type='email' 
        {...field.input} />
      </FormField>
    );
  }

  _renderTextArea(field) {
    const { meta: { touched, error } } = field;
    return (
      <FormField label={field.label} error={touched ? error : ''}>
        <textarea 
        type='text'
        {...field.input}
        />
      </FormField>
    );
  }

  _renderContactForm() {
    const { handleSubmit } = this.props;
    const { locale } = this.props;
    return (
        <Form onSubmit={handleSubmit(this._onSubmit.bind(this))} pad='small'>
          <FormFields>
            <Field label={translation.formNameLabel(locale)} name='name' component={this._renderNameField} />
            <Field label={translation.formEmailLabel(locale)} name='email' component={this._renderEmailField} />
            <Field label={translation.formMessageLabel(locale)} name='message' component={this._renderTextArea} />
          </FormFields>
          <Box pad={{ vertical: 'medium' }} align='center'>
            <Button label={translation.formSubmitButton(locale)} type='submit' primary={true} />
          </Box>
        </Form>
    );
  }

  sendContactForm() {
    const mailbomburl = 'https://api.mailgun.net/v3/sandboxdf527ad67a134d3eb77be3bd0b39e964.mailgun.org';

    axios.post({ 
      url: mailbomburl, 
      auth: {
        
      } 
    });
  }

  _onSubmit(values) {
    console.log(values);
  }

  render() {
    const { locale } = this.props;
    const contactItems = translation.getContactItems(locale);
    return (
      <Section pad='medium'>
        <Box pad='medium'>
          <span>{translation.pageTitle(locale)}</span>
        </Box>
        <Box pad={{ vertical: 'large', horizontal: 'none' }} responsive={true}>
          <Split showOnResponsive='both' fixed={false}>
            <Box align='center' responsive={true}>
              {contactItems.map(item => (
                this._renderContactItem(item.title, item.links)
              ))}
            </Box>
            <Box align='center' responsive={true}>
              <Title>{translation.contactTitle(locale)}</Title>
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
  if (!values.name) {
      errors.name = 'Please enter your name';
  }
  if (!values.email) {
      errors.email = 'Please enter your email';
  }
  
  if (!values.message) {
      errors.message = 'Please enter your message';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'ContactForm'
})(connect(null, null)(Contact));
