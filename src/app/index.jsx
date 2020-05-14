import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Link, BrowserRouter } from 'react-router-dom';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './components/Home/Home.jsx';
import { About } from './components/About/About.jsx';
import { Order } from './components/Order/Order.jsx';
import { Contact } from './components/Contact/Contact.jsx';
import './../sass/media.scss';

// import { CForm } from './components/Contact/contact_form.jsx'





class App extends React.Component {

   constructor(props){
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
                <Route exact={true} path='/' component={Home}/>
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
          <Footer />
        </div>
        <div className='main-page_footer'>
          <p className='main-page_footer-text'>
            © 2023 by Hanna Bakes. Proudly created with Wix.com
          </p>
        </div>
        </div>
        </Router>

		);
	}
}

ReactDOM.render(<App />, document.querySelector('.react-root'));
