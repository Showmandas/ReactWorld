import React, { useState } from 'react';
import img1 from './sliderImages/pic-1.avif'
import img2 from './sliderImages/pic-2.avif'
import img3 from './sliderImages/pic-3.avif'
import img4 from './sliderImages/pic-4.avif'

const images=[img1,img2,img3,img4];
const Slider = () => {
    const[allImages,setAllImages]=useState(images)
    return (
        <div>
           <img src={allImages[0]} alt="slide images" width={300} height={400} /> 
        </div>
    );
};

export default Slider;