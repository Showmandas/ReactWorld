import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Contact = () => {
    const phoneData=useLoaderData()
    return (
        <div>
            <h2>All phones</h2>
            {
                phoneData.map(phone=><li key={phone.id}><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
            }
        </div>
    );
};

export default Contact;