import React from 'react';

const Link = ({item}) => {
    return (
        <li className='mr-12'>
            <a href={item.path}>{item.name}</a>
        </li>
    );
};

export default Link;