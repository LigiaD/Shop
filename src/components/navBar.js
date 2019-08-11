import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'; 

import ResponsiveMenu from 'react-responsive-navbar';

class NavBar extends Component {

    handleOnClick = (link) => {
        this.props.changeNavbarActive(link._id)
        if(this.props.onClick) {
            this.props.onClick(link._id);
        }
    }

//     state = {showSideNav:false}
 
//     handleSideNavToggle = ()=>{
//       this.setState((currentState)=>{
//           return {showSideNav: !currentState.showSideNav}
//       })
//   }


    render() {
        return (
            <ResponsiveMenu
                // handleSideNavToggle={this.handleSideNavToggle} 
                menuOpenButton={<div className='bars'><i className="fas fa-bars"></i></div>}
                // showSideNav={this.state.showSideNav}
                menuCloseButton={<div className='x'><i className="fas fa-times"></i></div> }
                changeMenuOn="500px"
                largeMenuClassName='navbar'
                smallMenuClassName="small-navbar"
                menu={
                    // <div className='navbar'>
                    
                        this.props.navbarLinks.map((link, index) => {
                            return (
                                <a className={`navbar__link ${link.active ? 'green-text' : ''}`} key={index} onClick={() => this.handleOnClick(link)}>
                                    {link.title}
                                </a>

                            )
                        })
                    
                    
                // </div>
                }
      />
           
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

NavBar = connect(mapStateToProps, actions)(NavBar);

export default NavBar;

