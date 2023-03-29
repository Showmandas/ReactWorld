import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Card from './Card';
import './Card.css';
import {addToDb, getShoppingCart} from '../../../utilities/fakedb'

const Cards = () => {
    const[products,setProducts]=useState([])
    const [cart,setCart]=useState([]);

    // load products 
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart=getShoppingCart()
        const savedCart=[];
        // step-1 get id 
        for(const id in storedCart){
            // step 2-get the product by using id 
            const addedProduct=products.find(product=>product.id === id)
            if(addedProduct){

            // step-3: get quantity of the product 
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            // step-4 add the addedProduct to savedCart 
            savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
    },[products])
    const handleCart=(product)=>{
        // const newCart=[...cart,product]
        let newCart=[];
        const exists=cart.find(pd=>pd.id===product.id)
        if(!exists){
            product.quantity=1;
            newCart=[...cart,product]
        }else{
            exists.quantity=exists.quantity + 1;
            const remaining=cart.filter(od=>pd.id===product.id);
            newCart=[...remaining,exists]
        }
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