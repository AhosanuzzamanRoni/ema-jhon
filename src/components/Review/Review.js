import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart ,setCart]=useState([]);
    const [orderPlaced,setOrderPlaced]=useState(false);

    const handlePlaceOrder=()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();

    }



    const removeProduct=(productKey)=>{
        // console.log('remove clicked',productKey);
        const newCart=cart.filter(pd=>pd.key !==productKey);
        setCart(newCart); 
        removeFromDatabaseCart(productKey);

    }
    useEffect(() => {
        //cart
         const saveCart=getDatabaseCart();

         const productKeys=Object.keys(saveCart);

        
         const cartProducts = productKeys.map(key=>{
             const product =fakeData.find(pd=>pd.key ===key);
             product.quantity =saveCart[key];


             return product;
         });
         setCart(cartProducts);
        //  console.log(cartProducts );

    },[]) //dependency 
    let thankyou;
    if (orderPlaced) {
        thankyou=<img src={happyImage} alt=''/>

        
    }

  

    return (
        <div className='twin-container'>
            <div className="product-container">
            {
             cart.map(pd=> <ReviewItem
             key={pd.key}
             removeProduct={removeProduct}
                 product={pd}></ReviewItem>)

         }
         {thankyou}

        


            </div>
            <div className="cart-container">
                <Cart cart={cart} >
                    <button onClick={handlePlaceOrder} className='main-btn'>Place Order</button>

                </Cart>

            </div>
        
         
        
        </div>
    );
        
};

export default Review;