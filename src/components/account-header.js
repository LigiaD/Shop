import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';

class AccountHeader extends Component {
    render() {
        return (
            <div className='account-header'>
                {/* <img className= 'header__img'src=''/> */}
                <h1 className='account-header__text'>Welcome and enjoy your ride!</h1>
                <div className='account-header__links'>
                    {
                        this.props.headerLinks.map((link, index) => {
                            return (
                                <a key={index} className='account-header__link' onClick={() => history.push(link.path)}>
                                    {link.title}
                                </a>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { headerLinks } = state.headerNavbar;
    return {
        headerLinks
    }
}

AccountHeader = connect(mapStateToProps)(AccountHeader);
export default AccountHeader;