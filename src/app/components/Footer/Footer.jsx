import React, { Component } from 'react';
import { FooterForm } from './Footer_Form.jsx'

export class Footer extends Component {
  submitHandler(eventObject) {
    eventObject.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }
  
  submitHandler(eventObject) {
    eventObject.preventDefault();
    document.getElementById('thanksText').style.visibility = 'visible'
    setTimeout(() => {
      document.getElementById('thanksText').remove();
    }, 4000);
    document.getElementById('form').reset();
  }

  emailChangeHanlerFooter(value) {
    this.setState({ email: value })
    if (!value) {
      document.getElementById('email').style.borderBottom = '2px solid red';
    } else {
      document.getElementById('email').style.borderBottom = '2px solid black';
    }
  }

  render() {
    return (
      <footer className='page-footer'>
        <div className='page-footer_row'>
          <p className='page-footer_row-text'>
            Subscribe to My Newsletter
          </p>
          <FooterForm />
        </div>
      </footer>
    );
  }
}
