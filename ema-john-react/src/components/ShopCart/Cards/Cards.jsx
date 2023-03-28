import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Card from './Card';
import './Card.css';
import {addToDb, getShoppingCart} from '../../../utilities/fakedb'

const Cards = () => {
    const[products,setProducts]=useState([])
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart=getShoppingCart()
        // step-1 get id 
        for(const id in storedCart){
            // step 2-get the product by using id 
            const savedProduct=products.find(product=>product.id === id)
            // step-3: get quantity of the product 
            const quantity=storedCart[id];
            addedProduct.quantity=quantity
        }
    },[])
    const handleCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart);
        addToDb(product.id);
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