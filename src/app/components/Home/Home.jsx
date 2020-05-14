import './Home.scss';
import '../../../sass/grid.scss'
import React, { Component } from 'react';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';
import { SocialBlock } from './Home_socialBlock.jsx'
import { TopBlock } from './Home_topBlock.jsx'
import { BottomBlock } from './Home_bottomBlock.jsx'


export class Home extends Component {
  render() {
    return (
      <Container className='home-container'>
        <div className='page-content home-page'>
          <p className='text-center home_header'>HANNA BAKES.</p>
          <TopBlock/>
          <CardDeck className='home_center-content' >
            <Card className='home_center-content_block'>
              <p className='text-center center-box-color_text'>ALL CAKES ARE TAILORED TO YOUR TASTE AND STYLE</p>
            </Card>
          </CardDeck>
          <BottomBlock/>
          <p className='text-center social-header'>Follow me on Instagram</p>
          <SocialBlock />
        </div>
      </Container>
    )
  }
}
