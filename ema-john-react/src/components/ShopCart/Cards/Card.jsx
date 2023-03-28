import React from 'react';
import './Card.css'

const Card = (props) => {
    // console.log(props);
    console.log(props.product);
    const{img,name,price,id,seller,ratings}=props.product;
    const handleCart=props.handleCart;
    return (
        <div className='p-5'>
<div className="card card-container h-full bg-white text-black w-80 mb-5 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body text-justify  ">
    <h2 className="card-title">{name}</h2>
    <p>Price: ${price}</p>
    <div className='mb-8'>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings}</p>
    </div>
      <button className="btn-cart font-semibold" onClick={()=>handleCart(props.product)}>Add To Cart</button>

  </div>
</div>
        </div>
        
            
    );
};

export default Card;