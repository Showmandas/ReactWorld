import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import img from '../../src/assets/images/login/login.svg'
import { AuthContext } from '../Provider/AuthProvider'

export default function Register() {
    const {createUser}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value;
        const email=form.email.value;
        const conpass=form.conpass.value;
        console.log(name,email,conpass)

        createUser(email,conpass)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>console.log(error))

    }
    return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">
      <img src={img} alt="login img" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="confirm password" name='conpass' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' className="btn btn-primary" value='Register'/>
        </div>
        </form>
        <p>Already have an account <Link to={'/login'} className="font-bold text-orange-500">Login</Link></p>
      </div>
    </div>
  </div>
</div>
  )
}
