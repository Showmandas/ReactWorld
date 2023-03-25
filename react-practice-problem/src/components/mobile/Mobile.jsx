import React, { useEffect, useState } from 'react';

const Mobile = () => {
    const [count,setCount]=useState(100);

    const clickBattery=()=>{
        if(count>0){
            let newCount=count-10;
            setCount(newCount);
        }else{
            setCount(0);
        }
    }
   

    return (
        <div>
           <h3>{count}</h3>
           <button onClick={clickBattery}>Battery Down</button> 
        </div>
    );
};

export default Mobile;