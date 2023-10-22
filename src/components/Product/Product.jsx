import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    // console.log(props);

    const {img, name, price, seller, ratings} = props.product;

    // move on to shop.jsx file
//    const handleAddToCart = (product) =>{
//         console.log("product added");
//         console.log(product);

//    }

// |> pass the props return in handleAddToCart function 
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            {/* <h2>THis is product</h2> */}
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to cart  <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;