import React from 'react';

const Photo = ({photo}) => {
    const{title,id,url,thumbnailUrl}=photo;
    return (
        <div>
            <img src={thumbnailUrl} alt="" />
            <h3>{title}</h3>
        </div>
    );
};

export default Photo;