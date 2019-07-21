import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as translation from '../translation/contact';
import Toast from 'grommet/components/Toast';
import axios from 'axios';
import {reset} from 'redux-form';

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

  constructor() {
    super();
    this.state = {
      sending: false,
      showToast: false
    };
  }

  componentDidMount() {
    // window.scrollTo(0, 0);
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
          <Button label={this.state.sending ? 'Sending...' : 'Send'} type='submit' primary={true} />
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
    this.setState({ sending: true });
    this.props.dispatch(reset('ContactForm'));
    const data = {
      service_id: 'gmail',
      template_id: 'template_t2fI38Iq',
      user_id: 'user_7EoF1ktaZ8ZA4XVRwPvMR',
      template_params: {
        from_name: values.name,
        reply_to: values.email,
        message_html: values.message
      }
    };
    axios.post('https://api.emailjs.com/api/v1.0/email/send', data).then(() => {
      this.setState({ showToast: true });
    });
  }

  _onCloseToast() {
    this.setState({ showToast: false, sending: false });
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
          { this.state.showToast ?
          <Toast status='ok'
            // eslint-disable-next-line react/jsx-no-bind
            onClose={this._onCloseToast.bind(this)}>
            {translation.toastFeedback(locale)}
          </Toast>
          : ''
          }
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
