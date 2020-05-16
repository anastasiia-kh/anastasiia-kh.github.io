import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { OrderModalUser } from './Order_modalUser.jsx'
import './Order_modalUser.scss';
import './Order_tab.scss';

export class OrderTab extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  ToggleClick() {
    var styleMenu = document.getElementById('flex-column')
    var imgMenu = document.getElementById('menu-img')

    if (styleMenu.style.visibility === 'visible' || "") {
      styleMenu.style.visibility = "hidden";
      imgMenu.style.transform = 'rotate(0deg)'
    } else {
      styleMenu.style.visibility = "visible";
      imgMenu.style.transform = 'rotate(180deg)'
    }
  }

  OpenUserModal() {
    var openModal = document.getElementById('userModal')
    if (openModal.style.visibility === 'visible' || "") {
      openModal.style.visibility = "hidden";
    } else {
      openModal.style.visibility = "visible";
    }
  }

  render() {
    return (
      <>
        <div className='user-modal' id='userModal'>
          <div className='modal-bkg'></div>
          <OrderModalUser />
        </div>
        <button onClick={this.OpenUserModal} className='d-flex left-menu'>
          <svg className='client-icon' width="100" height="100" viewBox="0 0 32 32">
            <path d="M16.1,7.9a6,6,0,1,1-6,6h0A6,6,0,0,1,16.1,7.9Z" style={{ fill: 'rgb(137, 134, 134)', isolation: 'isolate' }}>
            </path>
            <path d="M16,0A15.9,15.9,0,0,0,.3,16,15.9,15.9,0,0,0,16,32,15.9,15.9,0,0,0,31.7,16,15.9,15.9,0,0,0,16,0Zm0,0.5A15.4,15.4,0,0,1,31.2,16a15.6,15.6,0,0,1-4.1,10.5A14.5,14.5,0,0,0,16,21.3h0A14.5,14.5,0,0,0,4.9,26.5,15.6,15.6,0,0,1,.8,16,15.4,15.4,0,0,1,16,.5Z" style={{ fill: 'rgb(137, 134, 134)' }}>
            </path>
          </svg>
          <p className='left-menu_header'>Hi, Guest</p>
        </button>
        <button className='left-menu left-menu_btn' onClick={this.ToggleClick} >
          CAKES MENU
          <img src='https://cdn.onlinewebfonts.com/svg/img_359223.png' id='menu-img' className='left-menu_toggle-icon' />
        </button>
        <Nav variant='pills' className='flex-column d-block' id='flex-column'>
          <Nav.Item >
            <Nav.Link className='left-menu_item' eventKey='first'>
              Wedding Cakes
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='left-menu_item' eventKey='second' >
              Celebration Cakes
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    )
  }
}
