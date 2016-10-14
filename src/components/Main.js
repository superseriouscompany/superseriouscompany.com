'use strict';

require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Page   from './Page';

class AppComponent extends React.Component {
  render() {
    return (

<div>
  <Header />
  <Page />
  <Footer />
</div>


    );
  }
}

export default AppComponent;
