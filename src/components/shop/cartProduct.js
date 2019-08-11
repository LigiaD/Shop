import React, { Component } from 'react';
import GreenPriceTag from './greenPriceTag';
import Quantity from './quantity';


class CartProduct extends Component {
    render() {
        const { className, product, quantity } = this.props;
        const { title, price, imageUrl } = product;
        return (
            <div className={`${className} cart-product`}>
                <img className='cart-product__image' src={imageUrl}/>
                <div className='cart-product__title'>{title}</div>
                <Quantity className='cart-product__quantity' quantity={quantity}/>
                <a className='cart-product__remove'>Remove</a>
                <GreenPriceTag className='cart-product__price' title={price}/>
            </div>
        )
    }
}

export default CartProduct; 
