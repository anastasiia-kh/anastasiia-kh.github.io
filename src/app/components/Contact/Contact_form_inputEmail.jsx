import React, { Component } from 'react';
import './Contact_form_inputEmail.scss';


export class InputEmail extends Component {
    submitHandler(eventObject) {
		eventObject.preventDefault();
  }

  constructor(props){
    super(props);
    this.changeHandler = this.changeHandler.bind(this);

  }
  
  changeHandler(e) {
    const value = e.currentTarget.value;
    this.props.callback(value);
  }
  render() {
		return (
      <div onSubmit={this.submitHandler} className="input-form input-form_email">
        <input
          className='input-form_email_block'
          required
          label="myLabel"
          onBlur={this.changeHandler}
					id='email'
					type={this.props.type}
          placeholder="Email"
				/>
			</div>	
		);
	}
}
