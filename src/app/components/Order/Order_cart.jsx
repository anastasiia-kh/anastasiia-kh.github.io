import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Order_cart.scss';

export class OrderCart extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  RequestArea() {
    document.getElementById('textItem').style.visibility = 'hidden';
    document.getElementById('textArea').style.visibility = 'visible';

  }
  changeHandler(e) {
    const value = e.currentTarget.value;

    this.setState({ text: value });
    if (!value) {
      document.getElementById('textArea').style.visibility = 'hidden';
      document.getElementById('textItem').style.visibility = 'visible';
    }
  }

  render() {

    return (
      <div className='cart'>
        <div className='cart-header cart-block'>
          <div className='cart-block_left'>My Order</div>
          <div className='cart-block_right'>(0 Items)</div>
        </div>
        <div className='cart-empty'  >
          <svg className="cart-empty_icon " width="55px" height="60px" viewBox="0 0 53 60"><g><path d="M47.5,15.6 C47.5,13.5 45.8,11.9 43.7,11.9 L35.5,11.9 C35.4,8.9 34.8,5.5 32.9,3.1 C31.2,1.1 28.9,-2.22044605e-15 25.9,-2.22044605e-15 C23.4,-2.22044605e-15 21.3,1 19.8,2.8 C17.7,5.2 16.9,8.9 16.7,11.9 L8.9,11.9 C6.8,11.9 5.1,13.5 5.1,15.6 L0,56.1 C0,58.2 1.7,59.9 3.8,59.9 L26.9,59.9 L48.8,59.9 C50.9,59.9 52.6,58.2 52.6,56.1 L47.5,15.6 L47.5,15.6 Z M21.2,4 C22.4,2.7 23.9,2 25.8,2 C28.2,2 30,2.9 31.3,4.4 C32.9,6.4 33.4,8.8 33.5,11.8 L18.6,11.8 C18.8,8.9 19.5,6 21.2,4 L21.2,4 Z M48.8,57.9 L26.9,57.9 L3.8,57.9 C2.8,57.9 2.1,57.1 2,56.2 L7.2,15.8 L7.3,15.7 L7.3,15.6 C7.3,14.6 7.9,14 8.9,14 L16.5,14 C16.5,16 16.7,17.3 16.7,17.4 C16.8,17.9 17.2,18.2 17.7,18.2 L17.8,18.2 C18.3,18.1 18.7,17.8 18.7,17.2 C18.7,17.2 18.5,16 18.6,14 L33.6,14 C33.5,16 33.3,17.1 33.3,17.1 C33.2,17.6 33.5,18.1 34.1,18.2 C34.6,18.3 35.2,18.1 35.3,17.5 C35.3,17.4 35.6,16 35.7,14 L43.9,14 C44.9,14 45.5,14.5 45.5,15.6 L45.5,15.7 L45.6,15.8 L50.7,56.2 C50.5,57.1 49.8,57.9 48.8,57.9 L48.8,57.9 Z"></path></g></svg>
          <p className="cart-empty-text ">Browse our menu and start adding items to your order</p>
        </div>
        <div className='cart-block'>
          <div className='cart-block_left'>Subtotal</div>
          <div className='cart-block_right'>$0</div>
        </div>
        <button onClick={this.RequestArea} className='cart-request_btn'>
          <div id='textItem' className='order-request' >
            <div style={{ marginRight: '5px', fontWeight: '500', fontSize: '20px' }}>+</div>
            <p className='cart-request_btn-text'>Special request</p>
          </div>
          <textarea
            className='order_text_block'
            id='textArea'
            onBlur={this.changeHandler}
            as="textarea"
            rows="2"
            placeholder="Special request"
            style={{ borderRadius: "0", outline: "none !important" }}
          />
        </button>
        <div className='cart-bottom'>
          <p className='cart-bottom-text'>Online ordering unavailable</p>
          <Button disabled className="cart-btn btn-dark">ORDER NOW</Button>
        </div>
      </div>
    )
  }
}
