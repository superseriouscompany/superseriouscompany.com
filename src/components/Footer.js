'use strict';

import React from 'react';

class Footer extends React.Component {
  render() {
    return (


<div>
  <footer>
    <img className="santi hero" src={require('../images/santiHero.jpg')} alt="Santiago Garza Headshot" />
    <img className="neil hero"  src={require('../images/neilHero.jpg')} alt="Neil Sarkar Headshot" />
  </footer>
</div>


    )
  }
}

export default Footer;
