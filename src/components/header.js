import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';


// import { Slide } from 'react-slideshow-image';
 
// const slideImages = [
//     'photos/snow.jpg',
//    'photos/slide2.jpg',
//     'photos/slide3.jpg',
//     'photos/slide4.jpg',
//     'photos/slide5.jpg',
//     'photos/slide6.jpg',
//     'photos/slide7.jpg',
//     'photos/slide8.jpg',
//     'photos/slide9.jpg',
//     'photos/slide10.jpg',
    
// ];
 
// const properties = {
//   duration: 6000,
//   transitionDuration: 350,
//   infinite: true,
//   indicators: false,
//   arrows: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//   }
// }


   

class Header extends Component {

    render() {

        return (
            <div> <h1> Whatever</h1></div>

        //  <Slide {...properties} className = 'container'>
           
        //     {/* <img classname='header__img' src={slideImages[0]} />
        //     <img classname='header__img' src={slideImages[1]} />
        //     <img classname='header__img' src={slideImages[2]} />
        //     <img classname='header__img' src={slideImages[3]} /> */}
       
        //      <div className = 'header__img' style={{'backgroundImage': `url(${slideImages[0]})`}}>
        //           <h1 className='header__text'>Let's Go For A Ride!</h1>
        //          <div className='header__links'>
        //             {
        //                  this.props.headerLinks.map((link, index) => {
        //                       return (
        //                           <a key={index} className='header__link' onClick={() => history.push(link.path)}>
        //                               {link.title}
        //                           </a>

        //                       )
        //                   })
        //               }
        //           </div>
        //      </div>
        
        //      <div className = 'header__img' style={{'backgroundImage': `url(${slideImages[1]})`}}>
        //           <h1 className='header__text'>Enjoy The Best Adventure With Us!</h1>
        //          <div className='header__links'>
        //             {
        //                  this.props.headerLinks.map((link, index) => {
        //                       return (
        //                           <a key={index} className='header__link' onClick={() => history.push(link.path)}>
        //                               {link.title}
        //                           </a>

        //                       )
        //                   })
        //               }
        //           </div>
        //      </div>
        //     <div className = 'header__img' style={{'backgroundImage': `url(${slideImages[2]})`}}>
        //          <h1 className='header__text'>Best Prices, Best Quality </h1>
        //         <div className='header__links'>
        //             {
        //                  this.props.headerLinks.map((link, index) => {
        //                       return (
        //                           <a key={index} className='header__link' onClick={() => history.push(link.path)}>
        //                               {link.title}
        //                           </a>
        //                       )
        //                   })
        //               }
        //           </div>
        //      </div>

        //      <div className = 'header__img' style={{'backgroundImage': `url(${slideImages[3]})`}}>
        //           <h1 className='header__text'>Let's Go For A Ride!</h1>
        //          <div className='header__links'>
        //             {
        //                  this.props.headerLinks.map((link, index) => {
        //                       return (
        //                           <a key={index} className='header__link' onClick={() => history.push(link.path)}>
        //                               {link.title}
        //                           </a>

        //                       )
        //                   })
        //               }
        //           </div>
        //      </div>
        //     <div className = 'header__img' style={{'backgroundImage': `url(${slideImages[4]})`}}>
        //          <h1 className='header__text'>Let's Go For A Ride!</h1>
        //         <div className='header__links'>
        //            {
        //                 this.props.headerLinks.map((link, index) => {
        //                       return (
        //                           <a key={index} className='header__link' onClick={() => history.push(link.path)}>
        //                               {link.title}
        //                           </a>

        //                       )
        //                   })
        //               }
        //           </div>
        //      </div>

        //      <div className = 'header__img' style={{'backgroundImage': `url(${slideImages[5]})`}}>
        //           <h1 className='header__text'>Let's Go For A Ride!</h1>
        //          <div className='header__links'>
        //             {
        //                  this.props.headerLinks.map((link, index) => {
        //                       return (
        //                           <a key={index} className='header__link' onClick={() => history.push(link.path)}>
        //                               {link.title}
        //                           </a>

        //                       )
        //                   })
        //               }
        //           </div>
        //      </div>

        //      <div className = 'header__img' style={{'backgroundImage': `url(${slideImages[6]})`}}>
        //           <h1 className='header__text'>Let's Go For A Ride!</h1>
        //          <div className='header__links'>
        //             {
        //                  this.props.headerLinks.map((link, index) => {
        //                       return (
        //                           <a key={index} className='header__link' onClick={() => history.push(link.path)}>
        //                               {link.title}
        //                           </a>

        //                       )
        //                   })
        //               }
        //           </div>
        //      </div>

        //      <div className = 'header__img' style={{'backgroundImage': `url(${slideImages[7]})`}}>
        //           <h1 className='header__text'>Let's Go For A Ride!</h1>
        //          <div className='header__links'>
        //             {
        //                  this.props.headerLinks.map((link, index) => {
        //                       return (
        //                           <a key={index} className='header__link' onClick={() => history.push(link.path)}>
        //                               {link.title}
        //                           </a>

        //                       )
        //                   })
        //               }
        //           </div>
        //      </div>

        //      <div className = 'header__img' style={{'backgroundImage': `url(${slideImages[8]})`}}>
        //           <h1 className='header__text'>Let's Go For A Ride!</h1>
        //          <div className='header__links'>
        //             {
        //                  this.props.headerLinks.map((link, index) => {
        //                       return (
        //                           <a key={index} className='header__link' onClick={() => history.push(link.path)}>
        //                               {link.title}
        //                           </a>

        //                       )
        //                   })
        //               }
        //           </div>
        //      </div>

    
        // </Slide>
    
        )
    }
}
function mapStateToProps(state) {
    const { headerLinks } = state.headerNavbar;
    return {
        headerLinks
    }
}

Header = connect(mapStateToProps)(Header);
export default Header;
