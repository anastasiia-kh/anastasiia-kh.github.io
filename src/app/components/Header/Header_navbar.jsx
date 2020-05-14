import './Header_navbar.scss';
import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export class HeaderNavbar extends Component {
	render() {
		return (
			<Navbar.Collapse id="responsive-navbar-nav" className="navbar-toogle">
				<div className="responsive-navbar-nav_mobile">
					<Nav className="mr-auto header-left">
						<Nav.Link className="navigate-link" href="/#/">
							Home
						</Nav.Link>
						<Nav.Link className="navigate-link" href="/#/about">
							About
						</Nav.Link>
						<Nav.Link className="navigate-link" href="/#/order">
							Order
						</Nav.Link>
						<Nav.Link className="navigate-link" href="/#/contact">
							Contact
						</Nav.Link>
					</Nav>
				</div>
			</Navbar.Collapse>
		);
	}
}
