import React from 'react';
import './mealCard.css'

const MealCard = (props) => {
    console.log(props.meal);
    const{id,name,category,price,img}=props.meal;
    const showMealName=props.showMealName
    return (
        <div className='card'>
            <div className="cardMeal">
            <img src={img} alt="" />
            <div className="card-body">
                <h3>Meal Name: {name}</h3>
                <p>Category: {category}</p>
                <button className='rounded-full bg-slate-400' onClick={()=>showMealName(props.meal)}>Show Meal Name</button>
            </div>
            
            </div>
        </div>
    );
};

export default MealCard;