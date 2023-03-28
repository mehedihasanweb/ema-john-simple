import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const { name, img, price, ratings, seller, quantity } = props.product
    const handleAddToCart = props.handleAddToCart
    // const handleAddToCart = (product) => {
    //     console.log(product);
    // }
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={()=> handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart 
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;