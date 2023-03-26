import React from 'react';
import './cosmetic.css';
const Cosmetic = (props) => {
    // console.log(props.cosmetic);
    // const{name,age}=props.cosmetic;
    return (
        <div className='cosmeticDiv'>
            <h2>{props.cosmetic.name}</h2>
            <h3>{props.cosmetic.age}</h3>
            <h4></h4>
            <p></p>
        </div>
    );
};

export default Cosmetic;