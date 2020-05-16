import React, { Component } from 'react';
import { Container, CardDeck, Row, Col, Tab } from 'react-bootstrap';
import { OrderTable } from './Order_table.jsx'
import { OrderTab } from './Order_tab.jsx'
import { OrderCart } from './Order_cart.jsx'
import './Order.scss';

export class Order extends Component {
  render() {
    return (
      <Container className='order-page order-container'>
        <div className='order-container_toggle'>
          <div className="page-content order-page">
            <CardDeck className="order-container_top ">
              <p className="text-center order-container_top-text">Order</p>
            </CardDeck>
            <div className='info-message'>Sorry, online ordering is currently closed. We’re not taking orders right now.</div>
          </div>
          <Tab.Container id='left-tabs' defaultActiveKey='first'>
            <Row>
              <Col className='order-left' sm={2}>
                <OrderTab />
              </Col>
              <Col className='center-table' sm={8} >
                <div className='center-table_top center-table_top_main-part header-cakes '>
                  <p className='center-table_top_header '>CAKES MENU</p>
                  <p className='center-table_top_header-text'>Served daily between 12-5pm</p>
                </div>
                <OrderTable />
              </Col>
              <Col className='order_cart' sm={2}>
                <OrderCart />
              </Col>
            </Row>
          </Tab.Container>

        </div>
        <div className='order-page_hidden-container'>
          <div className='order-page_hidden-container_block'>
            <p className='order-page_hidden-container_block_header'>Hey, you`re on mobile!</p>
            <p className='order-page_hidden-container_block_main'>Our online ordering is the best viewed in fullscreen</p>
            <button className='order-page_hidden-container_block_btn'>OPEN FULLSCREEN</button>
          </div>
        </div>
      </Container>
    )
  }
}
