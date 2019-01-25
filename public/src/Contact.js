import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Contact.css';
import logo from './images/Final logo serif.png';
import fb from './images/facebook.png';
import ig from './images/instagram.png';
import graphic from './images/Contact page graphic 2.png';
import loading from './images/sun.gif';
import menu from './images/Responsive menu button.png';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.handleLoad = this.handleLoad.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  };

  handleClick() {
    document.getElementById('navbar-resp').style.marginLeft = '0';
  };

  handleClick2() {
    document.getElementById('navbar-resp').style.marginLeft = '-41%';
  };

  handleLoad() {
    document.images[5].style.visibility = 'hidden';
    document.images[6].style.visibility = 'visible';
  }

  render() {
    return (
      <div className='body' id='no-scroll'>
        <div className='navbar'>
          <img className='menu' src={menu} alt='MENU' onClick={this.handleClick} />
          <Link className='nav_links' to='/about'>ABOUT</Link>
          <Link className='nav_links' to='/join'>JOIN US</Link>
          <Link to='/' className='logo-wrapper'><img className='logo' src={logo} alt='LOGO'/></Link>
          <Link className='nav_links' to='/gallery'>GALLERY</Link>
          <Link className='nav_links' to='/contact'>CONTACT</Link>
          <div id='navbar-resp'>
            <div className='nav-link-wrapper' id='nav-wrapper-menu'>
              <div className='menu-wrapper'>
                <img className='menu-2' src={menu} alt='MENU' onClick={this.handleClick2} />
              </div>
            </div>
            <Link to='/about' className='nav-link-resp'><div className='nav-link-wrapper'><p>ABOUT</p></div></Link>
            <Link to='/join' className='nav-link-resp'><div className='nav-link-wrapper'><p>JOIN US</p></div></Link>
            <Link to='/gallery' className='nav-link-resp'><div className='nav-link-wrapper'><p>GALLERY</p></div></Link>
            <Link to='/contact' className='nav-link-resp'><div className='nav-link-wrapper'><p>CONTACT</p></div></Link>
          </div>
        </div>
        <div className='info'>
          <div className='left'>
            <p>For inquiries, feel free to contact:</p>
            <p className='bold'>calkasa@gmail.com</p>
            <br/>
            <p>See what we&#39;re up to on social media!</p>
            <p>Facebook:  <a href='facebook.com/berkeleykasa' target='_blank'><img id='logo' src={fb} alt='fb' /></a></p>
            <p>Instagram:  <a href='instagram.com/ucbkasa' target='_blank'><img id='logo' src={ig} alt='ig' /></a></p>
          </div>
          <div className='border'></div>
          <div className='right'>
            <p>Questions about our families?</p>
            <p className='bold'>Info coming soon!</p>
          </div>
          <img id='graphic-contact-1' src={loading} alt='graphic'/>
          <img id='graphic-contact-2' src={graphic} alt='graphic' onLoad={this.handleLoad}/>
        </div>

        <p className='copyright' id='copyright-no-scroll'>Copyright. Cal KASA.</p>
      </div>
    );
  }
}

export default withRouter(Contact);
