import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {
    // console.log(cart);
    // const cart = props.cart => option 1
    // const {cart} = props => option 2

    let totalPrice = 0
    let totalShipping = 0
    let quantity = 0
    for(const product of cart){
        // console.log(product);
        
        // if(product.quantity === 0){
        //     product.quantity = 1
        // }

        // product.quantity = product.quantity || 1

        totalPrice = totalPrice + product.price * product.quantity
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity
    }

    let totalTax = totalPrice * 0.07
    let grandTotal = parseFloat(totalPrice) + parseFloat(totalShipping) + parseFloat(totalTax);

    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${totalTax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;