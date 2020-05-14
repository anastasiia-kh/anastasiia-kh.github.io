import React, { Component } from 'react';
import './Order_modalUser.scss';
import { Button } from 'react-bootstrap';




export class OrderModalUser extends Component {
  CloseUserModal() {
    var closeModal = document.getElementById('userModal')
    if (closeModal.style.visibility === 'visible' || "") {
      closeModal.style.visibility = "hidden";
    } else {
      closeModal.style.visibility = "visible";
    }
  }
  render() {
    return (
        <div className='user-modal-block'>
          <div className='user-modal-block_top'>
              <img className='user-modal-block_top-img' src="https://static.wixstatic.com/media/314a1d70f2e8463ba1bf217d732149f4.jpg/v1/fill/w_245,h_184/file.jpg">
            </img>
            </div>
            <div className='modal_client-icon'>
              <svg className='modal_client-icon_svg' width="70" height="70" viewBox="0 0 32 32">
                <path d="M16.1,7.9a6,6,0,1,1-6,6h0A6,6,0,0,1,16.1,7.9Z" style={{ fill: 'rgb(137, 134, 134)', isolation: 'isolate' }}>
                </path>
                <path d="M16,0A15.9,15.9,0,0,0,.3,16,15.9,15.9,0,0,0,16,32,15.9,15.9,0,0,0,31.7,16,15.9,15.9,0,0,0,16,0Zm0,0.5A15.4,15.4,0,0,1,31.2,16a15.6,15.6,0,0,1-4.1,10.5A14.5,14.5,0,0,0,16,21.3h0A14.5,14.5,0,0,0,4.9,26.5,15.6,15.6,0,0,1,.8,16,15.4,15.4,0,0,1,16,.5Z" style={{ fill: 'rgb(137, 134, 134)' }}>
                </path>
              </svg>
          </div>
          <div className='user-modal-block_main'>
              <p className='user-modal-block_main-header'>Come Here Often?</p>
              <p className='user-modal-block_main-text'>Connect to Wix Restaurants for fast checkout</p>
              <Button className='facebook-btn'>
                <img className='facebook-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/300px-Facebook_icon_2013.svg.png" alt=""/>
                CONNECT WITH FACEBOOK
                <a className='facebook-link' href='https://www.facebook.com/' target='blank'/></Button>
              <p className='user-modal-block_main-text_bottom'>We hate spam, we will never post on your behalf</p>
          </div>
            <div className='user-modal-block_bottom'>
              <p className='user-modal-block_bottom-text'>Powered by Wix Restaurants (Terms
              ▪ Privacy)</p>
            </div>
            <button onClick={this.CloseUserModal} className='user-modal-close'>
              <img className='user-modal-close-img' src="https://static.parastorage.com/services/skins/2.1229.80/images/wysiwyg/core/themes/base/popup_close_x.png" alt="" />
            </button>
          </div>
    )
  }

}