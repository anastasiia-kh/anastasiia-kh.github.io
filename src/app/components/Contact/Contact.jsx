import React, { Component } from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import { ContactForm } from './contact_form.jsx';
import './Contact.scss';


export class Contact extends Component {
	render() {
		return (
			<Container className="contact-container">
				<div className="page-content contact-page">
					<CardDeck className="contact-container_top ">
						<p className="text-center contact-container_top-text">Contact Me </p>
					</CardDeck>
					<hr className="contact-container_line" />
					<div className="contact-container_center">
						<p className="contact-container_center_text_left">123-456-7890</p>
						<p className="contact-container_center_text_right">INFO@MYSITE.COM</p>
					</div>
					<div className="contact-container_description">
						<p className="contact-container_description-text">
							I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit
							Text” or double click me to add your own content and make changes to the font.
						</p>
					</div>
					<ContactForm />
				</div>
			</Container>
		);
	}
}
