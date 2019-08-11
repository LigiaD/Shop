import React, { Component } from 'react';

import AccountHeader from './account-header';
import AccountNavBar from './account-navbar';


class AccountLayout extends Component {
  render() {
    return (
      <div className="account-layout">
        {this.props.children}
        <AccountHeader />
        <AccountNavBar />
      </div>
    );
  }
}
export default AccountLayout;