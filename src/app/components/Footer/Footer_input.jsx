import './Footer_input.scss';
import React, { Component } from 'react';

export class FooterInput extends Component {
	constructor(props) {
		super(props);
		this.changeHandlerFooter = this.changeHandlerFooter.bind(this);
	}

	changeHandlerFooter(e) {
		const value = e.currentTarget.value;
		this.props.callback(value);
	}

	render() {
		return (
			<div onSubmit={this.submitHandler} className="page-footer_row">
				<input
					required
					className="page-footer_row-input"
					type="email"
					placeholder="Enter your email here*"
					onBlur={this.changeHandlerFooter}
					id="emailFooter"
					type={this.props.type}
				/>
			</div>
		);
	}
}
