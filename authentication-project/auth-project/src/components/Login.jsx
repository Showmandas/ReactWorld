import React, { useState } from 'react';
import { getAuth,signInWithPopup,GoogleAuthProvider,signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const googleAuthProvider=new GoogleAuthProvider();
const Login = () => {
    const [user,setUser]=useState(null)
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,googleAuthProvider)
        .then((result)=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setUser(loggedUser)
        }).catch((error)=>{
            const errMsg=error.message
            console.log(errMsg);
            
        })

    }

    const handleSignOut=()=>{
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null)

        }).catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
        <p>sign in with google</p>
        {
            user ?
            <button onClick={handleSignOut}>Sign out</button>:
            <button onClick={handleGoogleSignIn}>Google Login</button> 
        }
        {
            user && <div>
            <h2>{user?.displayName}</h2>
            <h2>{user?.email}</h2>
            <img src={user?.photoURL} alt="" />
        </div>
        }
        </div>
    );
};

export default Login;