import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]) 

    // for cart add product
    const [cart, setCart] = useState([])


    useEffect( ()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    // declare from poduct.jsx file
    const handleAddToCart = (product) =>{
        // console.log("product added");
        console.log(product);
        // cart.push(product);
        const newCart = [...cart, product] //create new array
        setCart(newCart);

   }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {/* <h2>Products coming here: {products.length}</h2> */}
                {
                    products.map(product => <Product
                        key={product.id} 
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;