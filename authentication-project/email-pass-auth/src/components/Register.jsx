import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase.config';


const auth = getAuth(app);

const Register = () => {
    const[error,setError]=useState('')
    const[success,setSuccess]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSuccess('')
        const email=e.target.email.value
        const password=e.target.password.value
        createUserWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setError('');
            e.target.reset();
            setSuccess('User registered successfully')
        }).catch((error)=>{
            const errorMessage = error.message
            setError(errorMessage);
            setSuccess('')
        })
    }

    return (
        <div>
            <h2>Register</h2>
            <div>
                <form onSubmit={handleSubmit}>

                <input type="email" id='email' name='email' placeholder='enter email' required /><br/>
                <input type="password" id='password' name='password' placeholder='enter password' required /><br/>
                <input type="submit" value="Register"  /><br/>
                
                </form>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default Register;