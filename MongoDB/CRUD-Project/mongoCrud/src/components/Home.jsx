/* eslint-disable no-unused-vars */
import React from 'react'

export default function Home() {
  return (
    <div className='container'>
        <div className="container mt-5">
    <form>
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
