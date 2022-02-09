import React from 'react';
import keeflerImg from '../assets/keefler.jpg';

function Header() {
  return (
    <div className="header">
      <div id="hero-image-container">
        <img src={keeflerImg} alt="Keefler" width="100%" className="hero-image" />
      </div>
      <h1>Keefler</h1>
      <p>Musician, Twitch streamer</p>
    </div>
  )
}

export default Header;
