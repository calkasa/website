import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Gallery.css';
import Slideshow from './Slideshow.js';
import logo from './images/Final logo serif.png';
import menu from './images/Responsive menu button.png';

import genMeet20162017_1 from './images/General Meeting/2016-2017 2nd Gen/1.jpg';
import genMeet20162017_4 from './images/General Meeting/2016-2017 2nd Gen/4.jpg';
import genMeet20162017_6 from './images/General Meeting/2016-2017 2nd Gen/6.jpg';
import genMeet20162017_8 from './images/General Meeting/2016-2017 2nd Gen/8.jpg';
import genMeet20162017_9 from './images/General Meeting/2016-2017 2nd Gen/9.jpg';
import genMeet20162017_10 from './images/General Meeting/2016-2017 2nd Gen/10.jpg';
import genMeet20152016_1 from './images/General Meeting/2015-2016 1st Gen/1.jpg';
import genMeet20152016_2 from './images/General Meeting/2015-2016 1st Gen/2.jpg';
import genMeet20152016_3 from './images/General Meeting/2015-2016 1st Gen/3.jpg';
import genMeet20152016_4 from './images/General Meeting/2015-2016 1st Gen/4.jpg';
import genMeet20152016_5 from './images/General Meeting/2015-2016 1st Gen/5.jpg';
import genMeet20142015_2 from './images/General Meeting/2014-2015 1st Gen/2.jpg';
import genMeet20142015_4 from './images/General Meeting/2014-2015 1st Gen/4.jpg';
import genMeet20142015_5 from './images/General Meeting/2014-2015 1st Gen/5.jpg';
import genMeet20142015_6 from './images/General Meeting/2014-2015 1st Gen/6.jpg';
import genMeet20142015_7 from './images/General Meeting/2014-2015 1st Gen/7.jpg';
import genMeet20142015_9 from './images/General Meeting/2014-2015 1st Gen/9.jpg';
import genMeet20132014_3 from './images/General Meeting/2013-2014 1st Gen/3.jpg';
import genMeet20132014_4 from './images/General Meeting/2013-2014 1st Gen/4.jpg';
import genMeet20132014_6 from './images/General Meeting/2013-2014 1st Gen/6.jpg';

import cultureShow2016_1 from './images/Culture Show/2016-2017 Culture Show/1.jpg';
import cultureShow2016_2 from './images/Culture Show/2016-2017 Culture Show/2.jpg';
import cultureShow2016_3 from './images/Culture Show/2016-2017 Culture Show/3.jpg';
import cultureShow2016_4 from './images/Culture Show/2016-2017 Culture Show/4.jpg';
import cultureShow2016_6 from './images/Culture Show/2016-2017 Culture Show/6.jpg';
import cultureShow2016_9 from './images/Culture Show/2016-2017 Culture Show/9.jpg';
import cultureShow2016_10 from './images/Culture Show/2016-2017 Culture Show/10.jpg';
import cultureShow2016_12 from './images/Culture Show/2016-2017 Culture Show/12.jpg';
import cultureShow2016_13 from './images/Culture Show/2016-2017 Culture Show/13.jpg';
import cultureShow2016_14 from './images/Culture Show/2016-2017 Culture Show/14.jpg';
import cultureShow2016_15 from './images/Culture Show/2016-2017 Culture Show/15.jpg';
import cultureShow2014_2 from './images/Culture Show/2014-2015 Culture Show/2.jpg';
import cultureShow2014_7 from './images/Culture Show/2014-2015 Culture Show/7.jpg';
import cultureShow2014_8 from './images/Culture Show/2014-2015 Culture Show/8.jpg';
import cultureShow2014_9 from './images/Culture Show/2014-2015 Culture Show/9.jpg';
import cultureShow2014_10 from './images/Culture Show/2014-2015 Culture Show/10.jpg';
import cultureShow2014_11 from './images/Culture Show/2014-2015 Culture Show/11.jpg';
import cultureShow2014_13 from './images/Culture Show/2014-2015 Culture Show/13.jpg';
import cultureShow2014_15 from './images/Culture Show/2014-2015 Culture Show/15.jpg';
import cultureShow2014_16 from './images/Culture Show/2014-2015 Culture Show/16.jpg';
import cultureShow2014_18 from './images/Culture Show/2014-2015 Culture Show/18.jpg';
import cultureShow2014_19 from './images/Culture Show/2014-2015 Culture Show/19.jpg';
import cultureShow2014_20 from './images/Culture Show/2014-2015 Culture Show/20.jpg';
import cultureShow2014_21 from './images/Culture Show/2014-2015 Culture Show/21.jpg';

import retreat2015_1 from './images/Retreat/2015-2016 Retreat/1.jpg';
import retreat2015_2 from './images/Retreat/2015-2016 Retreat/2.jpg';
import retreat2015_3 from './images/Retreat/2015-2016 Retreat/3.jpg';
import retreat2014_2 from './images/Retreat/2014-2015 Retreat/2.jpg';
import retreat2014_3 from './images/Retreat/2014-2015 Retreat/3.jpg';
import retreat2014_4 from './images/Retreat/2014-2015 Retreat/4.jpg';
import retreat2014_5 from './images/Retreat/2014-2015 Retreat/5.jpg';
import retreat2014_6 from './images/Retreat/2014-2015 Retreat/6.jpg';
import retreat2014_7 from './images/Retreat/2014-2015 Retreat/7.jpg';
import retreat2014_9 from './images/Retreat/2014-2015 Retreat/9.jpg';

import proDev2017_1 from './images/BKAA/2017-2018 BKAA/1.jpg';
import proDev2017_3 from './images/BKAA/2017-2018 BKAA/3.jpg';
import proDev2017_5 from './images/BKAA/2017-2018 BKAA/5.jpg';
import proDev2017_6 from './images/BKAA/2017-2018 BKAA/6.jpg';
import proDev2017_9 from './images/BKAA/2017-2018 BKAA/9.jpg';
import proDev2017_10 from './images/BKAA/2017-2018 BKAA/10.jpg';

import scroll from './images/scroll top.png';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClickUp = this.handleClickUp.bind(this);
  };

  handleClick() {
    document.getElementById('navbar-resp').style.marginLeft = '0';
  };

  handleClick2() {
    document.getElementById('navbar-resp').style.marginLeft = '-41%';
  };

  handleClickGallery = (i) => (e) => {
    const gallery = document.getElementsByClassName('event-gallery-wrapper')[i];
    const button = document.getElementsByClassName('event-button')[i];
    const subtitle = document.getElementsByClassName('subtitle-1')[i];
    const reveal = {height: [0, 'auto'], overflow: ['hidden', 'visible']};
    const revealSub = {visibility: ['hidden', 'visible']};
    const revealOpts = {duration: 400, easing: 'ease-out', fill: 'forwards'};

    if (button.textContent === 'View More') {
      gallery.animate(reveal, revealOpts);
      button.textContent = 'View Less';
      subtitle.animate(revealSub, revealOpts);
    } else {
      revealOpts['direction'] = 'reverse';
      gallery.animate(reveal, revealOpts);
      button.textContent = 'View More';
      subtitle.animate(revealSub, revealOpts);
    };
  };

  handleClickUp() {
    document.getElementsByClassName('body')[0].scrollTo(0,0);
  };

  handleScroll() {
    const el = document.getElementsByClassName('body')[0];
    let percent = el.scrollTop / (el.scrollHeight - window.screen.height) * 100;
    if (percent > 100) {
      percent = 100;
    }

    this.setState({height: percent + '%'});

    /* Scroll button visibility */
    const button = document.getElementsByClassName('button-scroll-up')[0];
    if (el.scrollTop < 300) {
      button.style.visibility = 'hidden'
    } else {
      button.style.visibility = 'visible'
    }
  };

  render() {
    let height = this.state.height;
    return (
      <div className='body' onScroll={this.handleScroll}>

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

        <div className='content' >

          <div className='scroll-bar'>
            <div className='scroll-cursor' style={{'height': height}}></div>
          </div>
          <div className='scroll-links' id='scroll-links-gallery'>
            <div><a className='link' href='#general'>General Meeting</a></div>
            <div><a className='link' href='#culture'>Culture Show</a></div>
            <div><a className='link' href='#retreat'>Retreat</a></div>
            <div><a className='link' href='#pro'>Professional Development</a></div>
          </div>

          <div className='button-scroll-up' onClick={this.handleClickUp}>
            <img className='event-img' src={scroll} alt='SCROLL' />
          </div>

          <p className='event-title' id='general'>General Meeting</p>
          <p className='event-description'>
            At the beginning of each semester, we hold a general meeting to introduce new and returning members to our organization, staff, and present the events we have planned.
          </p>
          <p className='subtitle-1'>2016-2017</p>
          <div className='event-gallery'>
            <div className='event-img-wrapper'><img className='event-img' src={genMeet20162017_1} alt='GENMEET2016' /></div>
            <div className='event-img-wrapper'><img className='event-img' src={genMeet20162017_4} alt='GENMEET2016' /></div>
            <div className='event-img-wrapper'><img className='event-img' src={genMeet20162017_6} alt='GENMEET2016' /></div>
          </div>
          <div className='event-gallery-wrapper'>
            <div className='event-gallery'>
              <div className='event-img-wrapper'><img className='event-img' src={genMeet20162017_8} alt='GENMEET2016' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={genMeet20162017_9} alt='GENMEET2016' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={genMeet20162017_10} alt='GENMEET2016' /></div>
            </div>
            <p className='subtitle'>2015-2016</p>
            <div className='event-gallery'>
              <div className='event-img-wrapper'><img className='event-img' src={genMeet20152016_1} alt='GENMEET2015' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={genMeet20152016_2} alt='GENMEET2015' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={genMeet20152016_3} alt='GENMEET2015' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={genMeet20152016_4} alt='GENMEET2015' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={genMeet20152016_5} alt='GENMEET2015' /></div>
            </div>
            <p className='subtitle'>2014-2015</p>
            <div className='event-gallery'>
              <div className='event-img-wrapper'><img className='event-img' src={genMeet20142015_2} alt='GENMEET2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={genMeet20142015_4} alt='GENMEET2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={genMeet20142015_5} alt='GENMEET2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={genMeet20142015_6} alt='GENMEET2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={genMeet20142015_7} alt='GENMEET2014' /></div>
            </div>
          </div>
          <p className='event-button' onClick={this.handleClickGallery(0)}>View More</p>

          <p className='event-title' id='culture'>Culture Show</p>
          <p className='event-description'>
            Our yearly show brings talent from clubs, students, and a special headliner to represent Korean culture.
          </p>
          <p className='subtitle-1'>2016-2017</p>
          <div className='event-gallery'>
            <div className='event-img-wrapper'><img className='event-img' src={cultureShow2016_1} alt='CULTURESHOW2016' /></div>
            <div className='event-img-wrapper'><img className='event-img' src={cultureShow2016_2} alt='CULTURESHOW2016' /></div>
            <div className='event-img-wrapper'><img className='event-img' src={cultureShow2016_3} alt='CULTURESHOW2016' /></div>
          </div>
          <div className='event-gallery-wrapper'>
            <div className='event-gallery'>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2016_4} alt='CULTURESHOW2016' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2016_6} alt='CULTURESHOW2016' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2016_9} alt='CULTURESHOW2016' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2016_10} alt='CULTURESHOW2016' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2016_12} alt='CULTURESHOW2016' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2016_13} alt='CULTURESHOW2016' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2016_14} alt='CULTURESHOW2016' /></div>
            </div>
            <p className='subtitle'>2014-2015</p>
            <div className='event-gallery'>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2014_2} alt='CULTURESHOW2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2014_7} alt='CULTURESHOW2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2014_8} alt='CULTURESHOW2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2014_9} alt='CULTURESHOW2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2014_10} alt='CULTURESHOW2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2014_11} alt='CULTURESHOW2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2014_13} alt='CULTURESHOW2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2014_15} alt='CULTURESHOW2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2014_16} alt='CULTURESHOW2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2014_18} alt='CULTURESHOW2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2014_19} alt='CULTURESHOW2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2014_20} alt='CULTURESHOW2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={cultureShow2014_21} alt='CULTURESHOW2014' /></div>
            </div>
          </div>
          <p className='event-button' onClick={this.handleClickGallery(1)}>View More</p>

          <p className='event-title' id='retreat'>Retreat</p>
          <p className='event-description'>
            Our yearly retreats whisk attendees away for a weekend to bond with our families outside of our familiar environment at Cal.
          </p>
          <p className='subtitle-1'>2015-2016</p>
          <div className='event-gallery'>
            <div className='event-img-wrapper'><img className='event-img' src={retreat2015_1} alt='RETREAT2015' /></div>
            <div className='event-img-wrapper'><img className='event-img' src={retreat2015_2} alt='RETREAT2015' /></div>
            <div className='event-img-wrapper'><img className='event-img' src={retreat2015_3} alt='RETREAT2015' /></div>
          </div>
          <div className='event-gallery-wrapper'>
            <p className='subtitle'>2014-2015</p>
            <div className='event-gallery'>
              <div className='event-img-wrapper'><img className='event-img' src={retreat2014_2} alt='RETREAT2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={retreat2014_3} alt='RETREAT2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={retreat2014_4} alt='RETREAT2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={retreat2014_5} alt='RETREAT2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={retreat2014_6} alt='RETREAT2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={retreat2014_7} alt='RETREAT2014' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={retreat2014_9} alt='RETREAT2014' /></div>
            </div>
          </div>
          <p className='event-button' onClick={this.handleClickGallery(2)}>View More</p>

          <p className='event-title' id='pro'>Professional Development</p>
          <p className='event-description'>
            Including career panels with Korean-American influencers, career workshops, and mixers with our
            Berkeley Korean Alumni Association, our Professional Development events hope to aid our members in their academic endeavors
            here at Berkeley.
          </p>
          <p className='subtitle-1'>2017-2018</p>
          <div className='event-gallery'>
            <div className='event-img-wrapper'><img className='event-img' src={proDev2017_1} alt='PRODEV2017' /></div>
            <div className='event-img-wrapper'><img className='event-img' src={proDev2017_3} alt='PRODEV2017' /></div>
            <div className='event-img-wrapper'><img className='event-img' src={proDev2017_5} alt='PRODEV2017' /></div>
          </div>
          <div className='event-gallery-wrapper'>
            <div className='event-gallery'>
              <div className='event-img-wrapper'><img className='event-img' src={proDev2017_6} alt='PRODEV2017' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={proDev2017_9} alt='PRODEV2017' /></div>
              <div className='event-img-wrapper'><img className='event-img' src={proDev2017_10} alt='PRODEV2017' /></div>
            </div>
          </div>
          <p className='event-button' onClick={this.handleClickGallery(3)}>View More</p>

        </div>

        <p className='copyright' style={{'display': 'none'}}>Copyright. Cal KASA.</p>

      </div>
    );
  }
}

export default withRouter(Gallery);
