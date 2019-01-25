import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './About.css';
import logo from './images/Final logo serif.png';

import lois from './images/Staff/Lois.jpg';
import will from './images/Staff/Will.jpg';
import christian from './images/Staff/Christian.jpg';
import hansol from './images/Staff/Hansol.jpg';
import jiyoon from './images/Staff/Jiyoon.jpg';
import nate from './images/Staff/Nate.jpg';
import yoon from './images/Staff/Yoon.jpg';
import linda from './images/Staff/Linda.png';
import jeffrey from './images/Staff/Jeffrey.jpg';
import na from './images/Staff/NA.png';

import graphic from './images/About page graphic.png';
import menu from './images/Responsive menu button.png';
import img1 from './images/About page 1.jpg';
import img2 from './images/About page 2.jpg';
import img3 from './images/About page 3.jpg';
import Staff from './Staff';
import scroll from './images/scroll top.png';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {height: '0'};

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

  handleClickUp() {
    document.getElementsByClassName('body')[0].scrollTo(0,0);
  };

  handleScroll() {
    /* Progress bar */
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
        <div className='content'>
          <div className='scroll-bar'>
            <div className='scroll-cursor' style={{'height': height}}></div>
          </div>
          <div className='scroll-links'>
            <div className='link-wrapper-1'><a className='link' href='#about'>What we do</a></div>
            <div className='link-wrapper-2'><a className='link' href='#staff'>Meet our staff</a></div>
          </div>
          <div className='button-scroll-up' onClick={this.handleClickUp}>
            <img className='about-img' src={scroll} alt='SCROLL' />
          </div>
          <div className='about-text' id='about'>
            <p className='about-1'>
              Established at the University of California, Berkeley in <span style={{'color': '#F16382'}}>1982</span>,
            </p>
            <p className='about-2'>
              the Korean-American Student Association has strived to create a familial environment for students based upon
              a shared love for the <span style={{'color': '#F16382'}}>Korean culture and heritage</span>.
            </p>
            <div className='about-imgs'>
              <div className='about-img-wrapper'>
                <img className='about-img' src={img1} alt='IMG1' />
              </div>
              <div className='about-img-wrapper'>
                <img className='about-img' src={img3} alt='IMG3' />
              </div>
              <div className='about-img-wrapper'>
                <img className='about-img' src={img2} alt='IMG2' />
              </div>
            </div>
            <p className='about-3'>Every year,</p>
            <ul className='about-list'>
              <li><span style={{'color': '#F16382'}}>Two general meetings</span>, one at the beginning of each semester,
              introduce previous and incoming members to our
              organization and the families for the year.</li>
              <li><span style={{'color': '#F16382'}}>New families</span> are formed with events planned and hosted by their heads.
              </li>
              <li>The annual <span style={{'color': '#F16382'}}>Korean culture show</span> showcases the talents of other
              Korean-American organizations on campus and our
              very own students, as well as a special performance by an Asian American artist or band from the music industry.</li>
              <li>Celebrations for <span style={{'color': '#F16382'}}>holidays</span>, such as Chuseok are hosted as
              an open, campus-wide event.</li>
              <li><span style={{'color': '#F16382'}}>Professional development events</span>, such as career panels,
              speaker series featuring Asian Americans in a variety of industries,
              and mixers with the Berkeley Korean-American Alumni Association.</li>
            </ul>
          </div>
          <img className='graphic' src={graphic} alt='graphic' />
          <div id='staff'>
            <Staff pic={linda} name='Linda Gao' title='Co President' year='Senior' />
            <Staff pic={christian} name='Christian Kim' title='Co President' year='Junior' />
            <Staff pic={nate} name='Nate Kang' title='External VP' year='Senior'/>
            <Staff pic={jiyoon} name='Jiyoon Jang' title='Internal VP' year='Junior' />
            <Staff pic={will} name='William Chae' title='Risk Manager' year='Junior' />
            <Staff pic={na} name='Rikki Lee' title='Social Media Chair' year='Senior' />
            <Staff pic={na} name='Kyle Qi' title='Marketing Chair' year='Sophomore' />
            <Staff pic={na} name='Cara Kim' title='Co Design Chair' year='Sophomore' />
            <Staff pic={lois} name='Lois Bin' title='Co Design Chair' year='Junior' />
            <Staff pic={na} name='Vivian Li' title='Historian' year='Senior' />
            <Staff pic={yoon} name='Yoon Namgoong' title='Co Culture Show Chair' year='Sophomore' />
            <Staff pic={na} name='Eunice Lee' title='Co Culture Show Chair' year='Senior' />
            <Staff pic={jeffrey} name='Jeffrey Park' title='Co Professional Development Chair' year='Sophomore' />
            <Staff pic={na} name='Terry Park' title='Co Professional Development Chair' year='Senior' />
            <Staff pic={na} name='Mika Tjoa' title='Secretary' year='Sophomore' />
            <Staff pic={na} name='Yujin Kim' title='Co Social Chair' year='Sophomore' />
            <Staff pic={na} name='Josh Geng' title='Co Social Chair' year='Sophomore' />
          </div>
        </div>
        <p className='copyright'>Copyright. Cal KASA.</p>
      </div>
    );
  }
}

export default withRouter(About);
