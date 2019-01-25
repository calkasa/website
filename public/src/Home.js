import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Home.css';
import logo from './images/Final logo serif.png';
import graphic from './images/Home page graphic.png';
import graphic2 from './images/Home page graphic 2.2.png';
import graphic3 from './images/Responsive home page graphic 2.2.png';
import animation from './images/border.png';
import loading from './images/sun.gif';
import menu from './images/Responsive menu button.png';
import title1 from './images/title-01.png';
import title2 from './images/title-02.png';
import dots1 from './images/dots.png';
import dots2 from './images/dots-02.png';

class Home extends Component {

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
    const img = document.images[4];
    img.src = graphic;
  };

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
        <div className='content-home'>
          <div className='graphic-wrapper'>
            <img className='animation' src={animation} alt='ANIMATION' />
            <img className='graphic-home' src={loading} alt='GRAPHIC' onLoad={this.handleLoad}/>
          </div>
          <div className='text'>
            <div className='col1'>
              <div className='text1-wrapper'>
                <p className='text-korean'>Korean</p>
                <p className='text-american'>American</p>
              </div>
              <div className='dots-wrapper-1'>
                <img className='dots' src={dots1} alt='DOTS' />
              </div>
              <div className='description-wrapper'>
                <p className='description-pink' id='description-1'>UC Berkeley&#39;s</p>
                <p className='description-pink' id='description-2'>Largest Korean</p>
                <p className='description-pink' id='description-3'>Organization.</p>
                <p className='description-blue'>Since 1982.</p>
              </div>
            </div>
            <div className='col2'>
              <div className='text2-wrapper'>
                <p className='text-student'>Student</p>
                <p className='text-association'>Association</p>
              </div>
            </div>
          </div>
        </div>
        <div className='buffer'></div>
        <p className='copyright' id='copyright-no-scroll'>Copyright. Cal KASA.</p>
      </div>
    );
  }
}

export default withRouter(Home);
