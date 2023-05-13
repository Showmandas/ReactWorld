/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import Swal from 'sweetalert2'

// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import app from '../../firebase.config';


const Login = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const { signInUser, user } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const logUser = result.user;
                console.log(logUser);
                Swal.fire({
                    icon: 'success',
                    title: 'Log in successfull',
                  })
                setSuccess('Log in successful')
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errmsg = error.message;
                console.log(errmsg);
                setError(errmsg)
            })
    }

    //google sign in


    return (
        <div className='container my-5 mb-5'>
            <div className="row bg-warning-subtle w-50 d-flex justify-content-center mx-auto bg-warning">
                <h2 className='p-3 text-center'>Please Log in</h2>
                <form className='w-100 p-5 mb-3' onSubmit={handleLogin}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' placeholder='enter your email' required />
                    </div>
                    <div class="mb-5">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' required placeholder='enter your password' />
                    </div>
                    <button type="submit" className="btn bg-warning-subtle fw-bold d-flex w-25 justify-content-center align-items-center mx-auto fs-5">Log in</button>
                </form>
                <div className='mb-3'>
                    <p className='fs-5 text-center'>Don't have account ? please <Link to={'/register'} className='text-decoration-none'>Register</Link></p>
                </div>
                <p className='text-success fw-bold text-center fs-4'>{success}</p>
                <p className='text-danger fw-bold text-center fs-4'>{error}</p>

            </div>

        </div>
    );
};

export default Login;