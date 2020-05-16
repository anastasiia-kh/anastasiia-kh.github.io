import './../sass/media.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './components/Home/Home.jsx';
import { About } from './components/About/About.jsx';
import { Order } from './components/Order/Order.jsx';
import { Contact } from './components/Contact/Contact.jsx';
import { MainFooter } from './components/Footer/Main_Footer.jsx';




class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);

  }

  render() {
    return (
      <Router >
        <div className="main-page">
          <Header />
          <div className='page'>
            <main className='content'>
              <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route path='/about'>
                  <About />
                </Route>
                <Route path='/order'>
                  <Order />
                </Route>
                <Route path='/contact'>
                  <Contact />
                </Route>
              </Switch>
            </main>
          </div>
          <Footer />
        </div>
        <MainFooter />
      </Router >
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.react-root'));
