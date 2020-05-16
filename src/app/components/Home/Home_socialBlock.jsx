import './Home_socialBlock.scss';
import React, { Component } from 'react';
import { CardDeck, Card, Modal, Carousel } from 'react-bootstrap';
import { HomeModal } from './Home_modal.jsx'

export class SocialBlock extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalOpen: props.opened,
      pic: props.picture,
    };
  }

  toggleModal(pic) {
    const state = this.state.modalOpen;
    this.setState({
      modalOpen: !state,
      pic,
    });
    var items = document.getElementsByClassName('modal-img');
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      element.style.visibility = 'visible';
    }
  }

  getItems(images) {
    var ut = [];
    for (let index = 0; index < images.length; index++) {
      const element = images[index];

      ut.push(<Carousel.Item key={index}>
        <img
          className='modal-img d-block'
          src={element}
        />
      </Carousel.Item>);
    }
    return ut;
  }

  render() {
    const { modalOpen } = this.state;
    const { show, bg } = this.props;
    const styles = {
      modal: {
        display: (show) ? null : 'none',
        backgroundColor: bg || 'rgba(255, 255, 255, 0.8)',
      }
    };


    var ArrImg = [
      'https://scontent.cdninstagram.com/v/t51.2885-15/28765871_563064214080850_810971361143947264_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_ohc=ed7RF-0z6ykAX8K54S8&_nc_ht=scontent.cdninstagram.com&oh=8101187a75f97487937627bebf9f6874&oe=5EBDE9DE',
      'https://scontent.cdninstagram.com/v/t51.2885-15/28765004_406417096488246_1178365612422856704_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_ohc=V3WFSMhGReYAX8mi3oY&_nc_ht=scontent.cdninstagram.com&oh=03279240e151bd203308a8975bc7d1c1&oe=5EBE7416',
      'https://scontent.cdninstagram.com/v/t51.2885-15/28754667_815672678643308_2730665650459508736_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_ohc=P0rrB8JeVUQAX_piL6V&_nc_ht=scontent.cdninstagram.com&oh=f9dc50cb61c03b6a7ae2b695390bf84f&oe=5EBF0985',
      'https://scontent.cdninstagram.com/v/t51.2885-15/29090243_1736260309773507_8798884287093932032_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_ohc=B5vaNq9p154AX9gP5qD&_nc_ht=scontent.cdninstagram.com&oh=9c95bb591fdbc617cd2bc7df754690cf&oe=5EBE9E77',
      'https://scontent.cdninstagram.com/v/t51.2885-15/29090986_539831559750679_5491718611150045184_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_ohc=m9crNgVBzP0AX-u8EDU&_nc_ht=scontent.cdninstagram.com&oh=c2a3ebdbaf3dd16569425ae90d5010b6&oe=5EBE4B91',
      'https://scontent.cdninstagram.com/v/t51.2885-15/28764362_484928768577076_7003760975828484096_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_ohc=2BvgXhY2GUMAX_lWstG&_nc_ht=scontent.cdninstagram.com&oh=c44fbb72f53bea3e983e00a4c0d9d9eb&oe=5EBCC701',
      'https://scontent.cdninstagram.com/v/t51.2885-15/29090918_185778395371851_351924230050283520_n.jpg?_nc_cat=110&_nc_sid=8ae9d6&_nc_ohc=_VPoKBLa4mAAX-RCUM5&_nc_ht=scontent.cdninstagram.com&oh=9ebcf3abb7f673a2c67d0f41b082a41c&oe=5EBD10A6',
      'https://scontent.cdninstagram.com/v/t51.2885-15/28766261_429257280832812_7853075034737213440_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=2BzdnE01GUAAX8x0bQ8&_nc_ht=scontent.cdninstagram.com&oh=44b4b835e476006bc5a0b4955d6f82de&oe=5EBBAC56',
      'https://scontent.cdninstagram.com/v/t51.2885-15/29092496_217840742286601_9068061844723204096_n.jpg?_nc_cat=106&_nc_sid=8ae9d6&_nc_ohc=KlGbRpt0BDgAX9-JZhn&_nc_ht=scontent.cdninstagram.com&oh=1c258b720fa0a272c525a218f717b9bc&oe=5EBF4DFC',
      'https://scontent.cdninstagram.com/v/t51.2885-15/28766592_359605737856511_4534877176947802112_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=214isk2XOCIAX8f5byv&_nc_ht=scontent.cdninstagram.com&oh=1577261626880bbc83b933cac233b353&oe=5EBE3036',
      'https://scontent.cdninstagram.com/v/t51.2885-15/28766877_158392494847878_2394231958696624128_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=OezQtSwpHScAX_waL1e&_nc_ht=scontent.cdninstagram.com&oh=ccef8ea1a0c10786dcd9d582ab08ac59&oe=5EBD409A',
      'https://scontent.cdninstagram.com/v/t51.2885-15/28753915_606307043041727_423541306472529920_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=4DDq2RF-PtUAX_YkHEb&_nc_ht=scontent.cdninstagram.com&oh=b12d18844438cc43b77bf289d1524260&oe=5EBCC5BE',
      'https://scontent.cdninstagram.com/v/t51.2885-15/29089520_184035179042993_736614477838942208_n.jpg?_nc_cat=110&_nc_sid=8ae9d6&_nc_ohc=w9v11yJava0AX8bRKX7&_nc_ht=scontent.cdninstagram.com&oh=918d634001f43d8aa5506781ed47ab65&oe=5EBCC5E7',
      'https://scontent.cdninstagram.com/v/t51.2885-15/29092871_766829847038042_2659273617438670848_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=L7YqaL9HukAAX9RxUBl&_nc_ht=scontent.cdninstagram.com&oh=208853327470ed23b6bd8f7e7844a8c1&oe=5EBCEA0B',
      'https://scontent.cdninstagram.com/v/t51.2885-15/28764878_1649907265090164_2482673250945990656_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=Ll2uBMQlww8AX8Q9PCw&_nc_ht=scontent.cdninstagram.com&oh=a04801f73e2d9b3aeb7f944786bcd553&oe=5EBCBA4B',
      'https://scontent.cdninstagram.com/v/t51.2885-15/28765699_344473832712009_5475512290792964096_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_ohc=ADIAtsIxCzAAX-uxm79&_nc_ht=scontent.cdninstagram.com&oh=e2d362e690ebd6698e1503459b6ce496&oe=5EBEED07',
      'https://scontent.cdninstagram.com/v/t51.2885-15/28765284_821574331361403_3124076863702433792_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=16omNln-4dEAX8Ij9ni&_nc_ht=scontent.cdninstagram.com&oh=bd62d5c5597d8574408f12090e35c3e4&oe=5EBE9BDB',
      'https://scontent.cdninstagram.com/v/t51.2885-15/29090356_172579506872235_5110519961319636992_n.jpg?_nc_cat=106&_nc_sid=8ae9d6&_nc_ohc=zjryGmLJvTcAX8GRzL3&_nc_ht=scontent.cdninstagram.com&oh=23ddb78a95f4b50da89fbbdc4d6f51c8&oe=5EBF1484',
    ]


    return (
      <div className='social-container'>
        <div
          className='modal-view'
          id='modal-view'>
          <HomeModal bg="#222"
            style={styles.modal}
            show={modalOpen}
            onClose={this.toggleModal.bind(this)}
          >
            <Carousel
              className="modal-carousel"
              onSelect={this.handleSelect}
              slide={false}
              indicators={false}>
              <Carousel.Item>
                <img
                  className='modal-img d-block'
                  id='modalImg'
                  src={this.state.pic} />
              </Carousel.Item>
              {this.getItems(ArrImg, this.state.pic)}
            </Carousel>
            <span
              className="glyphicon glyphicon-remove-sign modal-item-close"
              onClick={this.toggleModal.bind(this, 'https://static.parastorage.com/services/skins/2.1229.80/images/wysiwyg/core/themes/base/popup_close_x.png' )}> X
            </span>
          </HomeModal>
        </div>
        <CardDeck
          className='home_social-content social-block'>
          <Card
            onClick={this.toggleModal.bind(this, ArrImg[0])}
            className='social-block_icons sm={6} col-6'>
            <Card.Img
              className='social-img'
              variant='center'
              src={ArrImg[0]} />
            <p
              className='social-text'>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com
              </p>
          </Card>
          <Card
            onClick={this.toggleModal.bind(this, ArrImg[1])}
            className='social-block_icons sm={6} col-6'>
            <Card.Img
              className='social-img'
              variant='center'
              src={ArrImg[1]} />
            <p
              className='social-text'>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com
              </p>
          </Card>
          <Card
            onClick={this.toggleModal.bind(this, ArrImg[2], 2)}
            className='social-block_icons sm={6} col-6'>
            <Card.Img
              className='social-img'
              variant='center'
              src={ArrImg[2]} />
            <p
              className='social-text'>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com
              </p>
          </Card>
          <Card
            onClick={this.toggleModal.bind(this, ArrImg[3])}
            className='social-block_icons sm={6} col-6'>
            <Card.Img
              className='social-img'
              variant='center'
              src={ArrImg[3]} />
            <p
              className='social-text'>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com
              </p>
          </Card>
          <Card
            onClick={this.toggleModal.bind(this, ArrImg[4])}
            className='social-block_icons sm={6} col-6'>
            <Card.Img
              className='social-img'
              variant='center'
              src={ArrImg[4]} />
            <p
              className='social-text'>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com
              </p>
          </Card>
          <Card
            onClick={this.toggleModal.bind(this, ArrImg[5])}
            className='social-block_icons sm={6} col-6'>
            <Card.Img
              className='social-img'
              variant='center'
              src={ArrImg[5]} />
            <p
              className='social-text'>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com
              </p>
          </Card>
          <Card
            onClick={this.toggleModal.bind(this, ArrImg[6])}
            className='social-block_icons sm={6} col-6'>
            <Card.Img
              className='social-img'
              variant='center'
              src={ArrImg[6]} />
            <p
              className='social-text'>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com
              </p>
          </Card>
          <Card
            onClick={this.toggleModal.bind(this, ArrImg[7])}
            className='social-block_icons sm={6} col-6'>
            <Card.Img
              className='social-img'
              variant='center'
              src={ArrImg[7]} />
            <p
              className='social-text'>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com
              </p>
          </Card>
        </CardDeck>
        <Modal />
        <div className='home_nidden-block'>
          <button onClick={this.toggleModal.bind(this, ArrImg[0])} className='home_nidden-btn '>Show more</button>
        </div>
      </div>
    )
  }
}

