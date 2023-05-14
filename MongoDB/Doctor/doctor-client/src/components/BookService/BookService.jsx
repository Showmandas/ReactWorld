import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';

export default function BookService() {
  const {user}=useContext(AuthContext)
    // const doctorData=useLoaderData()
    const navigate=useNavigate();
    // console.log(doctorData)
    // const{title,_id,price}=doctorData

    const handleInsert=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const age=form.age.value
        const phone=form.phone.value
        const gender=form.gender.value
        const msg=form.msg.value
        const date=form.date.value
        const email=user.email
        const datas={name,age,phone,gender,msg,date,email}
        console.log(datas)

        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(datas)
        })
        .then(res=>res.json()) 
        .then(data=>{console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Data successfully Submitted',
                    text:'Doctor will call you and give a serial number for appointment.Please wait',
                    icon: 'success',
                  })
                  navigate('/bookings')
            }
        })
    }

  return (
    <div className='container'>
    <h2>Give Details</h2>
    <form className='w-50' onSubmit={handleInsert}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control" name='name' id="name" placeholder="Enter full name"/>
  </div>
  <div className="form-group">
    <label>Age</label>
    <input type="text" className="form-control" name='age' id="age" placeholder="Enter age"/>
  </div>
  <div className="form-group">
    <label>Phone</label>
    <input type="text" className="form-control" name='phone' id="phone" placeholder="Enter phone number"/>
  </div>
  <label>Problems</label>
  <div className="form-floating">
  <textarea className="form-control" placeholder="your problems" name='msg' id="msg"></textarea>
  <label>Write your problems..</label>
</div>
  <label>Sex: </label>
&nbsp;&nbsp;
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" id="male" name='gender' value="Male"/>
  <label className="form-check-label">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" id="female" name='gender' value="Female"/>
  <label className="form-check-label">Female</label>
</div>
  <div className="form-group">
    <label>Date</label>
    <input type="date" className="form-control" name='date' id="date" placeholder="Enter date"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

       </div>
  )
}
