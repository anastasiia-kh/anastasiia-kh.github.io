import './Home_bottomBlock.scss';
import '../../../sass/grid.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardDeck, Card, Button } from 'react-bootstrap';

export class BottomBlock extends Component {
	render() {
		return (
			<CardDeck className="home_bottom-content">
				<Card className="bottom-img_block ">
					<Card.Img
						className="bottom-img"
						variant="center"
						src="https://static.wixstatic.com/media/e1c78c_d5f27255657d452cb413ba28ef3bb976~mv2.jpg/v1/fill/w_860,h_436,al_c,q_85,usm_0.66_1.00_0.01/e1c78c_d5f27255657d452cb413ba28ef3bb976~mv2.webp"
					/>
					<Link className="meet-btn_link" to="/about">
						<Button className="meet-btn">Meet Hanna</Button>
					</Link>
				</Card>
				<Card className="bottom-img_block ">
					<Card.Img
						className="bottom-img"
						variant="center"
						src="https://static.wixstatic.com/media/2e2a49_484505d397e54215b428ec407ff1a872~mv2.jpg/v1/fill/w_860,h_436,al_c,q_85,usm_0.66_1.00_0.01/2e2a49_484505d397e54215b428ec407ff1a872~mv2.webp"
					/>
					<Link className="meet-btn_link" to="/contact">
						<Button className="meet-btn">Contact Me</Button>
					</Link>
				</Card>
			</CardDeck>
		);
	}
}
