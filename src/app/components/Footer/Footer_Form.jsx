import React, { Component } from 'react';
import { FooterInput } from './Footer_input.jsx';
import { Form, Button } from 'react-bootstrap';
import './Footer_Form.scss';

export class FooterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emailFooter: ''
		};
		this.emailChangeHanlerFooter = this.emailChangeHanlerFooter.bind(this);
		this.submitHandlerFooter = this.submitHandlerFooter.bind(this);
	}

	submitHandlerFooter(eventObject) {
		eventObject.preventDefault();
		document.getElementById('thanksTextFooter').style.visibility = 'visible';
		setTimeout(() => {
			document.getElementById('thanksTextFooter').remove();
		}, 4000);
		document.getElementById('formFooter').reset();
	}

	emailChangeHanlerFooter(valueFooter) {
		this.setState({ emailFooter: valueFooter });
		if (!valueFooter) {
			document.getElementById('emailFooter').style.border = '2.5px solid red';
		} else {
			document.getElementById('emailFooter').style.border = '2px solid black';
		}
	}

	render() {
		return (
			<Form onSubmit={this.submitHandlerFooter} id="formFooter" className="formFooter">
				<FooterInput className="input-email-footer" type="email" callback={this.emailChangeHanlerFooter} />
				<Button type="submit" className="page-footer_row-btn btn-dark active">
					Subscribe Now
				</Button>
				<div className="hidden-text_footer">
					<p className="thanks-text_footer" id="thanksTextFooter">
						Thaks for submitting!
					</p>
				</div>
			</Form>
		);
	}
}
