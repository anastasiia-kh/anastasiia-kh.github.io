import React, { Component } from 'react';
import './Order_itemModal.scss';
import './Order_table.scss';
import { CardDeck, Col, Tab,} from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { OrderItemModal } from './Order_itemModal.jsx'



export class OrderTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true,
			show: false,
			modalOpen: props.opened,
			pic: props.picture,
		};
		this.ToggleClick = this.ToggleClick.bind(this);
		this.OpenItem = this.OpenItem.bind(this);
	}

	ToggleClick() {
		var styleMenu = document.getElementById('flex-column');
		if (styleMenu.style.visibility === 'visible' || '') {
			styleMenu.style.visibility = 'hidden';
		} else {
			styleMenu.style.visibility = 'visible';
		}
	}

	OpenItem() {
		var item = document.getElementById('item')
		item.style.display = 'block'
	}

	toggleModal(pic) {
		this.backgroundModal()
		const state = this.state.modalOpen;
		this.setState({
			modalOpen: !state,
			pic,
		});
		
	}

	backgroundModal() {
		var bkg = document.getElementById('modal-view')
		if (bkg.style.visibility === 'visible' || '') {
			bkg.style.visibility = 'hidden';
		} else {
			bkg.style.visibility = 'visible';
		}
	}

	render() {
		const { modalOpen, pic } = this.state;
		const { show, bg } = this.props;
		const styles = {
			modal: {
				display: (show) ? null : 'none',
				backgroundColor: bg || 'rgba(255, 255, 255, 0.8)',
			}
		};

		return (
			<Tab.Content className='center-tab'>
				<div className='modal-orient'>
					<div
						className='modal-view-bkg'
						id='modal-view'>
					</div>
					<OrderItemModal
						show={modalOpen}
						onClose={this.toggleModal.bind(this)}
					>
						<img className='order-item-img' src={pic} />
						<button className="modal-item_order-close"
							onClick={this.toggleModal.bind(this)}>
							<img className='modal-item_order-close-img' src="https://static.parastorage.com/services/skins/2.1229.80/images/wysiwyg/core/themes/base/popup_close_x.png" alt="" />
						</button>
					</OrderItemModal>
				</div>
				<Tab.Pane eventKey="first">
					<div className="center-table_top center-table_bottom ">
						<p className="center-table_top_header center-table_bottom_header">Wedding Cakes</p>
						<p className="center-table_top_header-text">
							I'm a description. Click me and "Edit Menu" to open the Restaurant Menu editor and change my
							text.
						</p>
					</div>
					<CardDeck className="home_top-content">
						<Col className="center-table-card" md={4} sm={6}>
							<Card onClick={this.toggleModal.bind(this, "https://static.wixstatic.com/media/2b3e494e1c9e461e912fb23f55fd40a7.jpg")} className="center-table-card_item">
								<Card.Img
									className="item-img"
									variant="center"
									src="https://static.wixstatic.com/media/2b3e494e1c9e461e912fb23f55fd40a7.jpg"
								/>
								<div className="item-img-background" />
								<div className="card-title">
									<Card.Title className="center-table-card_text">Flowers Wedding Cake</Card.Title>
									<Card.Title className="center-table-card_text-bottom">$70</Card.Title>
									<div className="center-table-card_icon">+</div>
								</div>
							</Card>
						</Col>
						<Col className="center-table-card" md={4} sm={6}>
							<Card onClick={this.toggleModal.bind(this, "https://static.wixstatic.com/media/6b949b0522f3416287785bbb4d6de040.jpg")} className="center-table-card_item">
								<Card.Img
									className="item-img"
									variant="center"
									src="https://static.wixstatic.com/media/6b949b0522f3416287785bbb4d6de040.jpg"
								/>
								<div className="item-img-background" />
								<div className="card-title">
									<Card.Title className="center-table-card_text">Golden Wedding Cake</Card.Title>
									<Card.Title className="center-table-card_text-bottom">$70</Card.Title>
									<div className="center-table-card_icon">+</div>
								</div>
							</Card>
						</Col>
						<Col className="center-table-card" md={4} sm={6}>
							<Card onClick={this.toggleModal.bind(this, "https://static.wixstatic.com/media/c0090f9e8a854fb79099d5b8dba768ea.jpg")} className="center-table-card_item">
								<Card.Img
									className="item-img"
									variant="center"
									src="https://static.wixstatic.com/media/c0090f9e8a854fb79099d5b8dba768ea.jpg"
								/>
								<div className="item-img-background" />
								<div className="card-title">
									<Card.Title className="center-table-card_text">Romantic Wedding Cake</Card.Title>
									<Card.Title className="center-table-card_text-bottom">$70</Card.Title>
									<div className="center-table-card_icon">+</div>
								</div>
							</Card>
						</Col>
						<Col className="center-table-card" md={4} sm={6}>
							<Card onClick={this.toggleModal.bind(this, "https://static.wixstatic.com/media/37080ad729504a0ca56cbdbc40d8f14f.jpg")} className="center-table-card_item">
								<Card.Img
									className="item-img"
									variant="center"
									src="https://static.wixstatic.com/media/37080ad729504a0ca56cbdbc40d8f14f.jpg"
								/>
								<div className="item-img-background" />
								<div className="card-title">
									<Card.Title className="center-table-card_text">Classic Wedding Cake</Card.Title>
									<Card.Title className="center-table-card_text-bottom">$70</Card.Title>
									<div className="center-table-card_icon">+</div>
								</div>
							</Card>
						</Col>
						<Col className="center-table-card" md={4} sm={6}>
							<Card onClick={this.toggleModal.bind(this, 'https://static.wixstatic.com/media/ab7f5c832b8142f48fdf12081eee26d7.jpg')} className="center-table-card_item">
								<Card.Img
									className="item-img"
									variant="center"
									src="https://static.wixstatic.com/media/ab7f5c832b8142f48fdf12081eee26d7.jpg"
								/>
								<div className="item-img-background" />
								<div className="card-title">
									<Card.Title className="center-table-card_text">Pearls Wedding Cake</Card.Title>
									<Card.Title className="center-table-card_text-bottom">$70</Card.Title>
								</div>
								<div className="center-table-card_icon">+</div>
							</Card>
						</Col>
						<Col className="center-table-card" md={4} sm={6}>
							<Card onClick={this.toggleModal.bind(this, 'https://static.wixstatic.com/media/2fea2ea622f3423aa070670fd24ddd12.jpg')} className="center-table-card_item">
								<Card.Img
									className="item-img"
									variant="center"
									src="https://static.wixstatic.com/media/2fea2ea622f3423aa070670fd24ddd12.jpg"
								/>
								<div className="item-img-background" />
								<div className="card-title">
									<Card.Title className="center-table-card_text">
										Flowers Pink Wedding Cake
									</Card.Title>
									<Card.Title className="center-table-card_text-bottom">$70</Card.Title>
									<div className="center-table-card_icon">+</div>
								</div>
							</Card>
						</Col>
					</CardDeck>
				</Tab.Pane>
				<Tab.Pane eventKey="second">
					<div className="center-table_top center-table_bottom">
						<p className="center-table_top_header center-table_bottom_header">Celebration Cakes</p>
						<p className="center-table_top_header-text">
							I'm a description. Click me and "Edit Menu" to open the Restaurant Menu editor and change my
							text.
						</p>
					</div>
					<CardDeck className="home_top-content">
						<Col className="center-table-card" md={4} sm={6}>
							<Card onClick={this.toggleModal.bind(this, 'https://static.wixstatic.com/media/6ed53323e3024cd28ef879c523048e6b.jpg', )} className="center-table-card_item">
								<Card.Img
									className="item-img"
									variant="center"
									src="https://static.wixstatic.com/media/6ed53323e3024cd28ef879c523048e6b.jpg"
								/>
								<div className="item-img-background" />
								<div className="card-title">
									<Card.Title className="center-table-card_text">Makaroons Cake</Card.Title>
									<Card.Title className="center-table-card_text-bottom">$70</Card.Title>
									<div className="center-table-card_icon">+</div>
								</div>
							</Card>
						</Col>
						<Col className="center-table-card" md={4} sm={6}>
							<Card onClick={this.toggleModal.bind(this, 'https://static.wixstatic.com/media/1be12e34eaa64c70a84750f2e34535ff.jpg')} className="center-table-card_item">
								<Card.Img
									className="item-img"
									variant="center"
									src="https://static.wixstatic.com/media/1be12e34eaa64c70a84750f2e34535ff.jpg"
								/>
								<div className="item-img-background" />
								<div className="card-title">
									<Card.Title className="center-table-card_text">Makaroons Chocolate Cake</Card.Title>
									<Card.Title className="center-table-card_text-bottom">$70</Card.Title>
									<div className="center-table-card_icon">+</div>
								</div>
							</Card>
						</Col>
						<Col className="center-table-card" md={4} sm={6}>
							<Card onClick={this.toggleModal.bind(this, "https://static.wixstatic.com/media/df5e444641064caa8e8c98a1781f8f36.jpg")} className="center-table-card_item">
								<Card.Img
									className="item-img"
									variant="center"
									src="https://static.wixstatic.com/media/df5e444641064caa8e8c98a1781f8f36.jpg"
								/>
								<div className="item-img-background" />
								<div className="card-title">
									<Card.Title className="center-table-card_text">Ice Cream Cone Cake</Card.Title>
									<Card.Title className="center-table-card_text-bottom">$70</Card.Title>
									<div className="center-table-card_icon">+</div>
								</div>
							</Card>
						</Col>
						<Col className="center-table-card" md={4} sm={6}>
							<Card onClick={this.toggleModal.bind(this, "https://static.wixstatic.com/media/df5e444641064caa8e8c98a1781f8f36.jpg")} className="center-table-card_item">
								<Card.Img
									className="item-img"
									variant="center"
									src="https://static.wixstatic.com/media/c15559dbc4424fcdbf09b768323953a6.jpg"
								/>
								<div className="item-img-background" />
								<div className="card-title">
									<Card.Title className="center-table-card_text">Crazy Donuts and Meringue Cake</Card.Title>
									<Card.Title className="center-table-card_text-bottom">$70</Card.Title>
									<div className="center-table-card_icon">+</div>
								</div>
							</Card>
						</Col>
						<Col className="center-table-card" md={4} sm={6}>
							<Card onClick={this.toggleModal.bind(this, 'https://static.wixstatic.com/media/4c745d0527e94298b696f8f996dbc832.jpg')} className="center-table-card_item">
								<Card.Img
									className="item-img"
									variant="center"
									src="https://static.wixstatic.com/media/4c745d0527e94298b696f8f996dbc832.jpg"
								/>
								<div className="item-img-background" />
								<div className="card-title">
									<Card.Title className="center-table-card_text">Crazy Golden Chocolate Cake</Card.Title>
									<Card.Title className="center-table-card_text-bottom">$70</Card.Title>
									<div className="center-table-card_icon">+</div>
								</div>
							</Card>
						</Col>
						<Col className="center-table-card" md={4} sm={6}>
							<Card onClick={this.toggleModal.bind(this, 'https://static.wixstatic.com/media/314a1d70f2e8463ba1bf217d732149f4.jpg')} className="center-table-card_item">
								<Card.Img
									className="item-img"
									variant="center"
									src="https://static.wixstatic.com/media/314a1d70f2e8463ba1bf217d732149f4.jpg"
								/>
								<div className="item-img-background" />
								<div className="card-title">
									<Card.Title className="center-table-card_text">
										Murble & Donuts Cake Cake
									</Card.Title>
									<Card.Title className="center-table-card_text-bottom">$70</Card.Title>
									<div className="center-table-card_icon">+</div>
								</div>
							</Card>
						</Col>
					</CardDeck>
				</Tab.Pane>
			</Tab.Content>
		);
	}
}


