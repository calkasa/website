import React, { Component } from 'react';
import './Staff.css';

class Staff extends Component {
  render() {
    const {pic, name, title, year, phrase} = this.props;
    return (
      <div className='staff-body'>
        <img className='staff-img' src={pic} />
        <p className='staff-name'>{name}</p>
        <p className='staff-title'>{title}</p>
        <p className='staff-year'>{year}</p>
        <p className='staff-phrase'>&#39;{phrase}&#39;</p>
      </div>
    );
  }
}

export default Staff;
