import React, { useContext, useState } from 'react';
import { AuthContext } from './Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const [show,setShow]=useState(false);
    const {signIn}=useContext(AuthContext);
    const navigate=useNavigate()
    const location=useLocation()

    const from= location.state?.from?.pathName || '/';

    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;

        setError('')

        signIn(email,password)
        .then(result=>{
            const logUser=result.user;
            setSuccess('Log in Successfully');
            form.reset();
            navigate(from,{replace:true})
        }).catch(error=>{
            const errMsg=error.message;
            setError(error.message)
        })

    }
    return (
        <div className="container">
        <div className="card w-50 m-auto my-5">
        <h2>Login page</h2>
        <form onSubmit={handleLogin}>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" name="email"/>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type={show ? 'text':'password'} className="form-control" id="password" name="password"/>
      <button className='btn' onClick={()=>setShow(!show)}>{
        show ? <span>Hide</span>:<span>Show</span>
      }</button>
    </div>
  
    <input type="submit" className="btn btn-primary" value='Login'/>
  </form>
        </div>
      </div>
    );
};

export default Login;