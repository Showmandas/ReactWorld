import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceCard({service}) {
    const{_id,title,img,price}=service
  return (
    <div className='col-lg-4 col-12 p-3'>
    <div className="card p-3">
        <img src={img} alt="doctor pic" className='img-fluid'/>
        <div className="card-body">
            <h5>{title}</h5>
            <p>Fee : {price}</p>
        </div>
        <Link to={`/bookings/${_id}`}><button className='btn bg-warning-subtle'>Get Appointment</button></Link>
    </div>

    </div>
  )
}
