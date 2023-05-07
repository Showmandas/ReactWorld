/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import img1 from './sliderImages/pic-1.avif'
import img2 from './sliderImages/pic-2.avif'
import img3 from './sliderImages/pic-3.avif'
import img4 from './sliderImages/pic-4.avif'

const images=[img1,img2,img3,img4];
const Slider = () => {
    const[selectedImg,setSelectedImg]=useState(0);
    const[allImages,setAllImages]=useState(images);
    useEffect(()=>{
        setInterval(()=>{
            setSelectedImg(selectedImg=>selectedImg > 3 ? 0 : selectedImg + 1)
        },1000)
    },[])
    const handleNext=()=>{
        if(selectedImg < allImages.length - 1){
            setSelectedImg(selectedImg + 1)
        }
    }
    const handlePrev=()=>{
        if(selectedImg > 0){
            setSelectedImg(selectedImg - 1)
        }
    }
    return (
        <div>
           <img src={allImages[selectedImg]} alt="slide images" width={300} height={400} />
           <div>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
            </div> 
        </div>
    );
};

export default Slider;