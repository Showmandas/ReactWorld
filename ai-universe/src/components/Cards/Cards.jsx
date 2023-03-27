import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import SingleCard from '../SingleCard/SingleCard';
import SortButton from '../SortButton';

const Cards = () => {
    const[aiData,setAiData]=useState([]);
    const[singleData,setSingleData]=useState({})
    const[seeAll,setSeeAll]=useState(false);
    const[uniqueId,setUniqueId]=useState(null);
  
    // see all function 
    const handleSeeAll=()=>{
        setSeeAll(true);
    }

    // card data 
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        .then(res=>res.json())
        .then(data=>setAiData(data.data.tools))
    },[])
    
    // single data 
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res=>res.json())
        .then(data=>setSingleData(data.data))
    },[uniqueId]);

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                aiData.slice(0,seeAll ? aiData.length : 6).map(aidata=>{
                    console.log(aidata);
                    return <SingleCard data={aidata} key={aidata.id}
                    setUniqueId={setUniqueId} />
                })
            }
        </div>
       {
        !seeAll &&  <p onClick={handleSeeAll}>

        <SortButton>See More</SortButton>
   </p>
       }
       <Modal singleData={singleData}/>
        </>
        

    );
};

export default Cards;