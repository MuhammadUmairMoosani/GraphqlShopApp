import React, { Component } from 'react';

import './home.css';

class Home extends Component {
  render() {
    return (
   <div className="HomeMain">
     <img id="mainImage" src={require('../../assets/images/homeImage.png')} alt="home"/>
   </div>
    );
  }
}

export default Home;