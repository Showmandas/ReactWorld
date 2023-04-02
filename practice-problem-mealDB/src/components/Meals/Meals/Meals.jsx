import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../../utilities/fakedb";
import MealDetails from "../../MealDetails/MealDetails";
import MealCard from "../MealCard/MealCard";
import "./meals.css";

const Meals = () => {
    const[Meals,setMeals]=useState([]);
    const[mealName,setMealName]=useState([])

    useEffect(()=>{
        fetch('MealProducts.json')
        .then(res=>res.json())
        .then(data=>setMeals(data))
    },[])
    useEffect(()=>{
      const storedCart=getShoppingCart()
      
    },[])

    const showMealName=(mealname)=>{
      const newMeal=[...mealName,mealname]
      setMealName(newMeal);
      addToDb(mealname.id);
    }

  return (
    <div className="meal-section bg-orange-400 my-8">
      <div className="meal-container p-3">
        <h3>meal products</h3>
        {
Meals.map((meal)=>{
return <MealCard meal={meal} key={meal.id} showMealName={showMealName}/>
})
        }
      </div>
      <div className="details-container bg-red-500 p-3 text-white">
        <h2>order summary</h2>
        <MealDetails mealName={mealName}/>
      </div>
    </div>
  );
};

export default Meals;
