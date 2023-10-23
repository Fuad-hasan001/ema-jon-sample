import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { unstable_batchedUpdates } from 'react-dom';

const Shop = () => {
    const [products, setProducts] = useState([]) 

    // for cart add product
    const [cart, setCart] = useState([])


    useEffect( ()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])


    // get data from local storage: 
     /* then:
         step1: get the id using (for in) loop on stored obj
         step2: get the product from products using id (matched | not matched)
         step3: get the quantity 
         step4: add product id, quantity in array
         step5: set the array to setCart
         */

        useEffect(()=>{
            const storedCart = getShoppingCart(); //object: id, value
            let savedCart = [] ;
            // step1: get is of the addedProduct
            for(const id in storedCart){
                //step2: get product from products state by using id
                const addedProduct = products.find(product => product.id === id);
                if(addedProduct){
                    // step3: add quantity
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;

                    // step4: add the added product to the saved cart
                    savedCart.push(addedProduct);
                }
                // console.log('added product', addedProduct)
                // step5: set the cart
                setCart(savedCart);
            }
        },[products])


    // declare from poduct.jsx file
    const handleAddToCart = (product) =>{
        // console.log("product added");
        console.log(product);
        // cart.push(product);
        const newCart = [...cart, product] //create new array
        setCart(newCart);

        // localStorage: 
        addToDb(product.id)

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