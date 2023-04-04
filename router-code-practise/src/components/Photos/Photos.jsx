import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photo from '../Photo/Photo';
import './Photos.css'
const Photos = () => {
    const photos=useLoaderData();
    return (
        <div className='photos'>
            {
                photos.slice(0,6).map(photo=><Photo key={photo.id} photo={photo}/>)
            }
        </div>
    );
};

export default Photos;