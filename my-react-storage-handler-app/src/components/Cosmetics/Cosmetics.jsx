import React from 'react';
import  {Add, Subtract } from '../utilities/Calculate';

const Cosmetics = () => {
    const num1=34;
    const num2=45;
    const totalAdd=Add(num1,num2);
    const sub=Subtract(num1,num2);

    return (
        <div>
            <h1>Hello from Cosmetics</h1>
            <h3>TotalAdd:{totalAdd}</h3>
            <h3>Subtract: {sub}</h3>
        </div>
    );
};

export default Cosmetics;