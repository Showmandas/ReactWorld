import React, { useState } from 'react';
import {createUserWithEmailAndPassword,signOut,getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import app from './firebase.config';


const auth = getAuth(app);

const Register = () => {
    const [user,setUser]=useState({})
    const [success,setSuccess]=useState('')
    const [error,setError]=useState('')

const handleSubmit=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
        // Signed in 
        const reguser = result.user;
        // setUser(reguser);
        console.log(reguser);
        setSuccess('registration successful!')
        setError('')
        e.target.reset()
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);

        // ..
      });

}

    return (
        <div>
            <h2>Registe page</h2>
            <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" name='email'  className="form-control" id="email"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" name='password' className="form-control" id="password"/>
  </div>
<p className='text-dark fw-semibold'>{success}</p>
<p className='text-dark fw-semibold'>{error}</p>
  <input type="submit" className="btn btn-primary" value="submit"/>
</form>

        </div>
        </div>
    );
};

export default Register;