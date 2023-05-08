/* eslint-disable no-unused-vars */
import React from 'react'
// nrAE49ICpeAR7yVQ
export default function Home() {
    const handleForm=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const phone=form.phone.value;
        const user={name,email,phone}
        console.log(user);
        fetch('http://localhost:5000/users',{
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(user),
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
            if(data.insertedId){
                alert('User added');
                form.reset();
            }
        })

    }
  return (
    <div className='container'>
        <div className="container mt-5">
    <form className='d-flex flex-column w-50 justify-content-center' onSubmit={handleForm}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name"/>
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email"/>
      </div>
      <div className="form-group">
        <label>Phone number</label>
        <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your phone number"/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
    </div>
  )
}
