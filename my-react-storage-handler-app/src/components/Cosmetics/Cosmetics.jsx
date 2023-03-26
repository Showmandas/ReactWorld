// import React from 'react';
// import  {Add, Subtract } from '../utilities/Calculate';

// const Cosmetics = () => {
//     const num1=34;
//     const num2=45;
//     const totalAdd=Add(num1,num2);
//     const sub=Subtract(num1,num2);

//     return (
//         <div>
//             <h1>Hello from Cosmetics</h1>
//             <h3>TotalAdd:{totalAdd}</h3>
//             <h3>Subtract: {sub}</h3>
//         </div>
//     );
// };
import React, { useEffect, useState } from 'react';
import Cosmetic from './Cosmetic';
import './Cosmetics.css'

const Cosmetics = () => {
    const[cosmetics,setCosmetics]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))
    },[])
    return (
        <div className='cosmetic-container'>
            <h2>Cosmetics Data: {cosmetics.length}</h2>
            {
                cosmetics.map(cosmetic=>{
                    // console.log(cosmetic);
                   return <Cosmetic 
                    cosmetic={cosmetic}
                    key={cosmetic.id}/>
                })
            }
        </div>
    );
};

export default Cosmetics;
