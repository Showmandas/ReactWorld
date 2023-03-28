import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Card from './Card';
import './Card.css';

const Cards = () => {
    const[products,setProducts]=useState([])
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
            {/* <p className='text-5xl text-secondary'>{products.length}</p> */}
            {
                products.map(product=>{
                    return <Card product={product} key={product.id} handleCart={handleCart} />
                })
            }
            </div>
            <div className='cart-container bg-secondary text-black'>
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Cards;