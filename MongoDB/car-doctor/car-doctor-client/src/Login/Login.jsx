import React, { useContext } from 'react'
import img from '../../src/assets/images/login/login.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'

export default function Login() {
    const{signIn}=useContext(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

       signIn(email,password)
       .then(result=>{
        const loggedUser=result.user
        console.log(loggedUser)
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
      <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' className="btn btn-primary" value='Log in'/>
        </div>
        </form>
        <p>New to Car doctor <Link to={'/register'} className="font-bold text-orange-500">Sign up</Link></p>
      </div>
    </div>
  </div>
</div>
  )
}
