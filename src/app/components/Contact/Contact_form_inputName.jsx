import React, { Component } from 'react';
import './Contact_form_inputName.scss';

export class InputName extends Component {
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
			<div onSubmit={this.submitHandler} className="input-form input-form_name">
				<input
					className='input-form_name_block'
					required
					label="myLabel"
					onBlur={this.changeHandler}
					id="name"
					type={this.props.type}
					placeholder="Name"
				/>
			</div>
		);
	}
}
