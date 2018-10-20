import React, { Component } from 'react';
import Meta from './Meta';
import Nav from './Nav';
import Footer from './Footer';

import "../scss/main.scss"

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Page;
