import React from 'react';
import {signInWithPopup, GithubAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.init';


const Login = () => {
    const auth = getAuth(app);
    const googleProvider=new GoogleAuthProvider()
    const githubProvider=new GithubAuthProvider()
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const loggedUser=result.user
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log('error',error.message);
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google login</button>
        </div>
    );
};

export default Login;