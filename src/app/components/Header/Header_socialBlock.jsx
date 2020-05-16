import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import './Header_socialBlock.scss';

export class HeaderSocial extends Component {
  render() {
    return (
      <Nav className="header-right">
        <a className="header-right_icon" target="blank" href="https://www.facebook.com/wix">
          <img
            className="social-icon"
            src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png"
            alt=""
          ></img>
        </a>
        <a className="header-right_icon" target="blank" href="https://twitter.com/wix">
          <img
            className="social-icon"
            src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png"
            alt=""
          />
        </a>
        <a className="header-right_icon" target="blank" href="https://www.pinterest.com/wixcom/">
          <img
            className="social-icon"
            src="https://static.wixstatic.com/media/8f6f59264a094af0b46e9f6c77dff83e.png"
            alt=""
          />
        </a>
        <a className="header-right_icon" target="blank" href="https://www.instagram.com/wix/">
          <img
            className="social-icon"
            src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png"
            alt=""
          />
        </a>
      </Nav>
    );
  }
}
