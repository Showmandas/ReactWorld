import React, { useState } from 'react';
import {signOut,getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import app from './firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const Login = () => {
    const [user,setUser]=useState({});
    const [success,setSuccess]=useState('');
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setUser(loggedUser);
            setSuccess('Log in successfully')
        }).catch((error)=>{
            const errorMsg=error.message;
            console.log(errorMsg);
            setUser(errorMsg)
        })
    }

    const handleSignOut=()=>{
        signOut(auth).then((result) => {
            // Sign-out successful.
            setSuccess('sign out successfully')
          }).catch((error) => {
            // An error happened.
          });
          
    }
    // const handleGithubSignIn=()=>{

    // }
    return (
        <div className='container mt-5 mb-5'>
            <h2>Please Login</h2>
            <div className="row g-5">
                <div className="col-lg-6">
                <form>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email"  className="form-control" id="email" required/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" id="password" required/>
  </div>
  {
    user ?
    <input type="submit" className="btn btn-primary" onClick={handleSignOut} value="Sign out"/>:
    <input type="submit" className="btn btn-primary" value="log in"/>

  }
</form>
<p className='text-success'>{success}</p>
<div className='mt-4'>
<button className='btn bg-info-subtle' onClick={handleGoogleSignIn}>Login with Google</button>
<button className='btn bg-warning-subtle' >Login with Github</button>
</div>
                </div>
                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                    <h2>{user.displayName}</h2>
                    <h2>{user.email}</h2>
                    <img src={user.photoURL} className='img-fluid' alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Login;