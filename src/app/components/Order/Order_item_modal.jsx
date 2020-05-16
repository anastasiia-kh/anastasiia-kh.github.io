import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Order_item_modal.scss';

export class OrderItemModal extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
    this.changeHandl = this.changeHandl.bind(this);
  }

  ModalArea() {
    document.getElementById('modalText').style.visibility = 'hidden';
    document.getElementById('modalArea').style.visibility = 'visible';

  }
  changeHandl(e) {
    const value = e.currentTarget.value;

    this.setState({ text: value });
    if (!value) {
      document.getElementById('modalArea').style.visibility = 'hidden';
      document.getElementById('modalText').style.visibility = 'visible';
    }
  }

  render() {
    const { show, bg } = this.props;
    const styles = {
      modal: {
        display: (show) ? null : 'none',
        backgroundColor: bg || 'rgba(255, 255, 255, 0.8)',
      }
    }

    return (
      <div className="order-modal" id='modal-wrapper' style={styles.modal}>
        <div className='order-modal-main'>
          <div className="order-modal-item">
            {this.props.children}
          </div>
          <div className='order-modal-header'>
            <p className='order-modal-header_price'>$70</p>
            <p className='order-modal-header_text'>
              Special requests?
            </p>
            <button onClick={this.ModalArea} className="order-modal-item_btn">
              <div id='modalText' className='order-modal-item_btn-text'>
                <span className='plus-icon'>+</span>  	Add them here. We’ll do our best to make it happen
            </div>
              <div id='modalArea' className='modal_text_block'>
                <textarea
                  className='modal_text_block-top'
                  id='textModal'
                  onBlur={this.changeHandl}
                  as="textarea"
                  rows="2"
                  placeholder="What`s your request"
                  style={{ borderRadius: "0", outline: "none !important" }}
                />
                <span className='modal_text_block-bottom'>* Extre charges may apply</span>
              </div>
            </button>
          </div>
          <div className='order-modal-item_calculate'>
            <p className='order-modal-item_calculate-left'>Quantity</p>
            <div className='order-modal-item_calculate-right'>
              <button className='minus_btn'>
                <span className='btn_count-icon'>-</span>
              </button>
              <div id='result' className='counter'>1</div>
              <button className='plus_btn'>
                <span className='btn_count-icon'>+</span>
              </button>
            </div>
          </div>
          <Button disabled className="item_btn btn-dark"><span className='plus-icon plus-icon_btn'>+</span> ADD TO MY ORDER</Button>
          <p className='message'>Online ordering unavailable</p>
        </div>
      </div>
    )
  }
}