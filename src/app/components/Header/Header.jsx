import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { HeaderSocial } from './Header_social_block.jsx'
import { HeaderNavbar } from './Header_navbar.jsx'
import './Header.scss';


export class Header extends Component {
  render() {
    return (
      <main className="content header_container_content ">
        <Container className="header_container">
          <Navbar className="header_nav" collapseOnSelect expand="md" id="header" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <HeaderNavbar />
            <HeaderSocial />
          </Navbar>
        </Container>
      </main>
    );
  }
}
