// Use your imagination and creativity to create a header that is "uniquely you". 
// This can include additional images, graphics, whatever you like. 
//You can extend the JSX/JavaScript in the components but 
//you may not use external ReactJS Components or JavaScript libraries such as JQuery. 
//Be creative!

// The files you will need to implement are:

// components/header/Header.jsx - The ReactJS Component of your header component. This is defined a class Header of type React.Component.
// components/header/Header.css - Any CSS styles your component needs. You must include some styling for your header here.
// Note: gettingStarted.jax should have a personalized header from Problem 3 at he top of the page and the section with the motto from Problem 1.2 right below it. All other page views (p2.html, p4.html and p5.html) should have your personalized header from Problem 3.

import React from 'react';
import './Header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="header">
        Drew's Amazing React App
      </div>
    );
  }
}

export default Header;
