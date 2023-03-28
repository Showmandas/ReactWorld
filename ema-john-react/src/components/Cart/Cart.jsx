import React from 'react';
import './cart.css';

const Cart = ({cart}) => {
    // const{cart}=props;
    // console.log(cart);

    let total=0;
    let totalShipping=0;

    for(const product of cart){
        total=total+product.price;
        totalShipping=totalShipping+product.shipping;
    }
    const tax=total*7/100;
    const grandTotal=total+totalShipping+tax;


    return (
        <div className='cart'>
            
            <h4>Order summary</h4>
            <p>Selected items:{cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Shipping Charge:{totalShipping} </p>
            <p>Tax : {tax}</p>
            <h6>Grand Total: {grandTotal}</h6>
        </div>
    );
};

export default Cart;