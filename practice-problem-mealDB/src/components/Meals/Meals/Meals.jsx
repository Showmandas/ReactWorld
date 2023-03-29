import React, { useEffect, useState } from "react";
import "./meals.css";

const Meals = () => {
    const[meals,setMeals]=useState([]);

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])

  return (
    <div className="meal-section bg-orange-400 my-8">
      <div className="meal-container p-3">
        <h3>meal products</h3>
      </div>
      <div className="details-container bg-red-500 p-3 text-white">
        <h2>order summary</h2>
      </div>
    </div>
  );
};

export default Meals;
