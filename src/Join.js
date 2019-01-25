import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Join.css';
import logo from './images/Final logo serif.png';
import graphic from './images/Join page graphic.png';
import menu from './images/Responsive menu button.png';
import bird1 from './images/bird-01.png';
import bird2 from './images/bird-02.png';

class Join extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  };

  handleClick() {
    document.getElementById('navbar-resp').style.marginLeft = '0';
  };

  handleClick2() {
    document.getElementById('navbar-resp').style.marginLeft = '-41%';
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
        <div className='bird-wrapper-1'>
          <img className='bird' src={bird1} alt='BIRD' />
        </div>
        <div className='form'>
          {/* <p>FORM FOR FALL 2018 COMING SOON! :-)</p> */}
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQYDjYX-BxOAdvPfQ4LLSOhvUSOsmMVNBivpR1NQaCiFEAaw/viewform?embedded=true"
          width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </div>
        <div className='bird-wrapper-2'>
          <img className='bird' src={bird2} alt='BIRD' />
        </div>
      </div>
    );
  }
}

export default withRouter(Join);
