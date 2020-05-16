import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardDeck, Card, Button } from 'react-bootstrap';
import './Home_topBlock.scss';

export class TopBlock extends Component {
  render() {
    return (
      <CardDeck className='home_top-content'>
        <Card className='home_top_card'>
          <Card.Img className='top-img' variant='center' src='https://static.wixstatic.com/media/e1c78c_2b251c8e958e4c798589ec994a25b446~mv2_d_1800_2424_s_2.jpg/v1/fill/w_544,h_861,al_c,q_85,usm_0.66_1.00_0.01/e1c78c_2b251c8e958e4c798589ec994a25b446~mv2_d_1800_2424_s_2.webp' />
        </Card>
        <Card className='home_top_card home_top-content_box'>
          <Card className='top-img top-img_center-color top-img_card' />
          <div className='top-img_text-box'>
            <p className='text-center top-img_text-box_text'>Designer Cakes Delivered to Your Doorstep</p>
            <Button className='top-img_text-box_btn'>
              <Link className='navigate-linkOrder' to='/order'>Order Here</Link>
            </Button>
          </div>
        </Card>
        <Card className='home_top_card'>
          <Card.Img className='top-img' variant='center' src='https://static.wixstatic.com/media/e1c78c_c1bbc677e5ad4ee8849ce097f0007901~mv2_d_1200_1616_s_2.jpg/v1/fill/w_546,h_861,al_c,q_85,usm_0.66_1.00_0.01/e1c78c_c1bbc677e5ad4ee8849ce097f0007901~mv2_d_1200_1616_s_2.webp' />
        </Card>
      </CardDeck>
    )
  }
}
