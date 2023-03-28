import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Card.css';

const Cards = () => {
    const[products,setProducts]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className='product-container'>
            {/* <p className='text-5xl text-secondary'>{products.length}</p> */}
            {
                products.map(product=>{
                    return <Card product={product} key={product.id}/>
                })
            }
            </div>
            <div className='cart-container bg-secondary'>
            cart-container
            </div>
        </div>
    );
};

export default Cards;