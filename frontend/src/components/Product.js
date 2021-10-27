import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";

const Product = ({cartItem}) => {
    const {name,description,price} = cartItem;
    return (
        <div className='product'>
            <img src="/images/iphone12.jpg" alt="" />
            <div className="product__info">
                <p className="info__name">{name}</p>
                <p className="info__desc">{description}</p>
                <p className='info__price '>${price}</p>
                <Link to='/product/${222}' className='info__button' >View</Link>
            </div>
        </div>
    )
}

export default Product;
