import React from 'react';


const ReviewItem = (props) => {
    const {name,quantity,key,price}=props.product;
    // console.log(name,quantity);
   
    return (
        <div className='review-item'>
            <h4 className='product-name'> {name} </h4>
            <p> Quantity :{quantity}</p>
            <p>  <small>${price} </small></p>
            <button className='main-btn'
            onClick={()=> props.removeProduct(key)}> Remove  </button>

            
        </div>
    );
};

export default ReviewItem;

