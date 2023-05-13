import React, { useEffect, useState } from 'react'
import ServiceCards from './ServiceCards'

export default function Services() {
    const[services,setServices]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
  return (
    <div className='mb-20 mt-16'>
        <div className='text-center mt-5'>
            <h2 className='text-5xl font-bold text-orange-600'>Our service area</h2>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio delectus temporibus, numquam magnam placeat saepe blanditiis nam quibusdam veniam nisi tenetur voluptates ducimus eveniet repudiandae repellat velit rerum corporis similique.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                services.map(service=><ServiceCards service={service} key={service._id}/>)
            }
        </div>
    </div>
  )
}
