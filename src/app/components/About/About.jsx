import React, { Component } from 'react';
import './About.scss';
import { Container } from 'react-bootstrap';


export class About extends Component {
  render() {
    return (
      <Container className='about-container'>
        <div className='page-content about-page'>
          <div className='about-page_content'>
            <div className='about-page_content-header'>About Me</div>
            <p className='about-page_content-discription'>HANNA MASON - PASTRY CHEF, HOME BAKER, BLOGGER</p>
            <div className='about-page_content-img'>
              <img className='about-page_content-img_center'
                src="https://static.wixstatic.com/media/e1c78c_d5f27255657d452cb413ba28ef3bb976~mv2.jpg/v1/fill/w_305,h_306,al_c,q_80,usm_0.66_1.00_0.01/e1c78c_d5f27255657d452cb413ba28ef3bb976~mv2.webp" alt="" />
            </div>
            <div className='about-page_content-text'>
              <p className='about-page_content-text_top'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <p className='about-page_content-text_bottom'>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
            </div>
          </div>
        </div>
      </Container>
    )

  }
}
