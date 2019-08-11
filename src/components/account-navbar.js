import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'; 

class AccountNavBar extends Component {

    handleOnClick = (link) => {
        this.props.changeNavbarActive(link._id)
        if(this.props.onClick) {
            this.props.onClick(link._id);
        }
    }


    render() {
        return (
            <div className='account-navbar'>
                {
                    this.props.navbarLinks.map((link, index) => {
                        return (
                            <a className={`account-navbar__link ${link.active ? 'green-text' : ''}`} key={index} onClick={() => this.handleOnClick(link)}>
                                {link.title}
                            </a>

                        )
                    })
                }
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    const{ navbarLinks, onClick } = state.headerNavbar;
    return {
        navbarLinks,
        onClick
    }
}

AccountNavBar = connect(mapStateToProps, actions)(AccountNavBar);

export default AccountNavBar;

