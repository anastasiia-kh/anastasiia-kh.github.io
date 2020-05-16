import React, { Component } from 'react';
import { Container, CardDeck, Card } from 'react-bootstrap';
import { SocialBlock } from './Home_social_block.jsx'
import { TopBlock } from './Home_top_block.jsx'
import { BottomBlock } from './Home_bottom_block.jsx'
import './Home.scss';

export class Home extends Component {
  render() {
    return (
      <Container className='home-container'>
        <div className='page-content home-page'>
          <p className='text-center home_header'>HANNA BAKES.</p>
          <TopBlock />
          <CardDeck className='home_center-content' >
            <Card className='home_center-content_block'>
              <p className='text-center center-box-color_text'>ALL CAKES ARE TAILORED TO YOUR TASTE AND STYLE</p>
            </Card>
          </CardDeck>
          <BottomBlock />
          <p className='text-center social-header'>Follow me on Instagram</p>
          <SocialBlock />
        </div>
      </Container>
    )
  }
}
