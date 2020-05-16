import React, { Component } from 'react';
import { Form, } from 'react-bootstrap';
import './Contact_form_input-text.scss';

export class InputText extends Component {
  submitHandler(eventObject) {
    eventObject.preventDefault();
  }

  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    const value = e.currentTarget.value;
    this.props.callback(value);
  }
  render() {
    return (
      <div onSubmit={this.submitHandler} className="input-form input-form_text">
        <Form.Group className="input-text-area">
          <textarea
            className='input-form_text_block'
            required
            id='text'
            onBlur={this.changeHandler}
            as="textarea"
            rows="5"
            placeholder="Type your message here..."
            style={{ border: 'none', borderBottom: '1px solid grey', borderRadius: "0", outline: "none !important" }}
          />
        </Form.Group>
      </div>
    );
  }
}
