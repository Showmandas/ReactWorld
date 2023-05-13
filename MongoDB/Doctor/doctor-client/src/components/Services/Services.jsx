import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

export default function Services() {
    const [Services,setServices]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
  return (
    <div className='row mt-5 my-5'>
        {
            Services.map(service=><ServiceCard service={service} key={service._id}/>)
        }
    </div>
  )
}
