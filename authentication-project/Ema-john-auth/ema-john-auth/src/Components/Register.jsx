import React, { useContext, useState } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const[error,setError]=useState('')
    const[success,setSuccess]=useState('')
    const {createUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        setError('')
        

        if(password !== confirm){
            setError('Password did not match')
            return
        }
        else if(password.length < 6){
            setError('Password must be at least 6 character!!')
            return
        }

        createUser(email,password)
        .then(result=>{
            const regUser=result.user;
            setSuccess('Registration successful!!');
            navigate('/login')
            // setSuccess('')
        }).catch(error=>{
            const errMsg=error.message;
            setError(errMsg)
        })

    }
  return (
    <div className="container">
      <div className="card w-50 m-auto my-5">
      <h2>Register page</h2>
      <form onSubmit={handleRegister}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" required/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" required/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="confirm" name="confirm" required/>
  </div>
  <p className="text-danger fw-bold">{error}</p>
  <p className="text-success fw-bold">{success}</p>

  <input type="submit" className="btn btn-primary" value='Register'/>
</form>
      </div>
    </div>
  );
};

export default Register;
