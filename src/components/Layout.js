import React, { Component } from 'react';

import Header from './header';
import NavBar from './navBar';


class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {this.props.children}
        <Header />
        <NavBar />
      </div>
    );
  }
}
export default Layout;