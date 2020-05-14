import './Header_socialBlock.scss';
import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

export class HeaderSocial extends Component {
  render() {
    return (
      <Nav className="header-right">
        <a className="header-right_icon" target="blank" href="https://www.facebook.com/wix">
          <img
            className="social-icon"
            src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"
            alt=""
          ></img>
        </a>
        <a className="header-right_icon" target="blank" href="https://twitter.com/wix">
          <img
            className="social-icon"
            src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_23,h_24,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp"
            alt=""
          />
        </a>
        <a className="header-right_icon" target="blank" href="https://www.pinterest.com/wixcom/">
          <img
            className="social-icon"
            src="https://static.wixstatic.com/media/8f6f59264a094af0b46e9f6c77dff83e.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/8f6f59264a094af0b46e9f6c77dff83e.webp"
            alt=""
          />
        </a>
        <a className="header-right_icon" target="blank" href="https://www.instagram.com/wix/">
          <img
            className="social-icon"
            src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"
            alt=""
          />
        </a>
      </Nav>
    );
  }
}
