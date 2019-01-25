import React, { Component } from 'react';
import './Slideshow.css';

class Slideshow extends Component {
  render() {
    const {link, title} = this.props;
    return (
      <div className='slideshow-body'>
        <iframe style={{'position': 'relative', 'top': '0', 'left': '0', 'width': '100%', 'height': '100%'}} src={link}
          scrolling="no" frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true">
        </iframe>
        <p className='title'>{title}</p>
      </div>
    );
  }
}

export default Slideshow;
