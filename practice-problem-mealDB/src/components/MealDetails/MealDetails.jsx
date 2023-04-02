import React from 'react';

const MealDetails = ({mealName}) => {
    // const {strMeal}=props.mealName;
    // console.log(props.mealName);

    let total=0;
    let totalShippingCost=0
    for(const meal of mealName){
        total=total + meal.price;
        totalShippingCost=totalShippingCost + meal.shipping
    }
    const tax=total*7/100;
    const grandTotal=total+totalShippingCost+tax;
    
    return (
        {
        mealName.map((data,index)=>(
            <div>
            <h2>Selected Items: {data.length}</h2>
            <h2>Meal Name:{data.name}</h2>
            <h4>Price : {total}</h4>
            <h4>Shipping :{totalShippingCost}</h4>
            <h4>Tax :{tax}</h4>
            <h3>Grand Total: {grandTotal}</h3>
        </div>    
         ))
        }

    );
};

export default MealDetails;