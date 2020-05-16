import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { InputName } from './Contact_form_input-name.jsx';
import { InputEmail } from './Contact_form_input-email.jsx';
import { InputText } from './Contact_form_input-text.jsx';
import './Contact_form.scss';



export class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      text: ''
    };
    this.nameChangeHanler = this.nameChangeHanler.bind(this);
    this.emailChangeHanler = this.emailChangeHanler.bind(this);
    this.textChangeHanler = this.textChangeHanler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(eventObject) {
    eventObject.preventDefault();
    document.getElementById('thanksText').style.visibility = 'visible';
    setTimeout(() => {
      document.getElementById('thanksText').remove();
    }, 4000);
    document.getElementById('form').reset();
  }

  nameChangeHanler(value) {
    this.setState({ name: value });
    if (!value) {
      document.getElementById('name').style.borderBottom = '2px solid red';
    } else {
      document.getElementById('name').style.borderBottom = '1px solid grey';
    }
  }

  emailChangeHanler(value) {
    this.setState({ email: value });
    if (!value) {
      document.getElementById('email').style.borderBottom = '2px solid red';
    } else {
      document.getElementById('email').style.borderBottom = '1px solid grey';
    }
  }

  textChangeHanler(value) {
    this.setState({ text: value });
    if (!value) {
      document.getElementById('text').style.borderBottom = '2px solid red';
    } else {
      document.getElementById('text').style.borderBottom = '1px solid grey';
    }
  }

  render() {
    return (
      <Form onSubmit={this.submitHandler} id="form" className="contact_input-form">
        <Form.Group className="contact_input-form_content">
          <div className="input-form-top">
            <div className="input-form-top-align">
              <InputName className="input-name" type="text" callback={this.nameChangeHanler} />
              <InputEmail className="input-email" type="email" callback={this.emailChangeHanler} />
            </div>
          </div>
          <InputText className="input-text" type="text" callback={this.textChangeHanler} />
          <Button id="123" type="submit" className="input-form-btn btn btn-dark active ">
            Submit
					</Button>
          <div className="hidden-text">
            <p className="thanks-text" id="thanksText">
              Thaks for submitting!
						</p>
          </div>
        </Form.Group>
      </Form>
    );
  }
}
