import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css'

const About = () => {
    const userData=useLoaderData()
    console.log(userData);
    return (
        <div className='users'>
            {
                userData.map(user=><User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default About;