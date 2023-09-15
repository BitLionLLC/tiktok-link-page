import React from "react";
import avatar from "../assets/avatar.png";

function Header() {
  return (
    <div className="header">
      <div id="hero-image-container">
        <img src={avatar} alt="Keefler" width="100%" className="hero-image" />
      </div>
      <h1>Lovely Sayings</h1>
      <p>Inspiration, condensed</p>
    </div>
  );
}

export default Header;
