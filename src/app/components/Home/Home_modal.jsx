import React, { Component } from 'react';
import './Home_socialBlock.scss';
import './Home_modal.scss';


export class HomeModal extends Component {

  render() {
    const { show, bg } = this.props;
    const styles = {
      modal: {
        display: (show) ? null : 'none',
        backgroundColor: bg || 'rgba(255, 255, 255, 0.8)',
      }
    }

    return (
      <div className="modal-wrapper" id='modal-wrapper' style={styles.modal}>
        <div className='modal-main'>
          <div className="modal-item">
            {this.props.children}
          </div>
          <div className='modal-right' id='modal-right'>
            <div className='modal-right_header'>
              <p className='modal-right_header_text'>celebrationscakes8347</p>
            </div>
            <a className='modal-right_header_link'
              href="https://www.instagram.com/celebrationscakes8347/">
              <img className='modal-right_header_icon' src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"
                alt="" />
              <p className='modal-right_text-hidden'>Go to Instagram</p>
            </a>
            <p className='modal-right_text'>celebrationscakes8347 </p>
          </div>
        </div>
      </div>
    )
  }
}