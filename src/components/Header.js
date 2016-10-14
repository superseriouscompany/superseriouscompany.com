import React from 'react';

class Header extends React.Component {
  render() {
    return (



<header className="withHeading">
  <a href="/" className="smallLogoLink">
    <img className="smallLogo" alt="Super Serious Company Logo" src={require('../images/smallLogo.jpg')} />
  </a>
  <h1 className="">
      <span className="pageHeading">
        Nobody<br />Cares
      </span>
    <a className="logoLink" href="/">
      <img src={require('../images/logo.jpg')} alt="Super Serious Company Logo" />
    </a>
  </h1>
  <img className="hamburger js-hamburger" src={require('../images/hamburger.jpg')} alt="Mobile navigation hamburger icon" />
  <div className="menu">
    <a href="/story" className="bottom left item ">Story</a>
    <a href="/projects/untitled-october" className="bottom left item ">Current Project</a>
    <a href="/philosophy" className="desktop-only bottom right item active">Nobody Cares</a>
    <a href="/house" className="top right item ">Our House</a>
    <a href="/philosophy" className="mobile-only bottom right item active">Nobody Cares</a>
  </div>
</header>



    )
  }
}

module.exports = Header;
