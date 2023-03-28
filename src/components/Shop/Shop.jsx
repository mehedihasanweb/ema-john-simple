import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart ] = useState([])
    
    const handleAddToCart =(product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
    }

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart();
         const savedCart = []
        // step 1 : get id of the storedCart
        for(const id in storedCart){
            // step no 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id);
            
            if(addedProduct){
                // step no 3: add quantity
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct)
            }
            console.log(addedProduct);
        }
        // step no 5: set the cart
        setCart(savedCart)
    },[products])

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;