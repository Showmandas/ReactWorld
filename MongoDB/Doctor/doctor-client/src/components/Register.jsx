
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import Swal from 'sweetalert2'


const Register = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const { updateUserData, user, createUser} = useContext(AuthContext);
    // console.log(googleSignIn)
    //    const location=useLocation()
    //    const navigate=useNavigate();
    //    const from = location?.state?.pathname || '/'

    const handleRegister = (e) => {
        e.preventDefault();
        setSuccess('');
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

        console.log(name, email, photoUrl);

        // validation
        if (password.length < 6) {
            setError('Password must be at least 6 character!');
            return;
        }


        // user creation 
        createUser(email, password)
            .then(result => {
                const regUser = result.user;
                Swal.fire({
                    icon: 'success',
                    title: 'Registration successfull',
                  })
                setSuccess('Registration Successful');
                e.target.reset();
                setError('')
                console.log(regUser)
                //display image in navbar
                updateUserData(result.user, name, photoUrl)
                navigate('/')

            })
            .catch(error => {
                const errMsg = error.message;
                console.log(errMsg);
                // setError(errMsg);
            })
    }

//   google sign in 
    // const googleLogIn = () => {
    //     googleSignIn()
    //         .then(result => {
    //             const googleUser = result.user;
    //             console.log(googleUser);
    //         }).catch(error => {
    //             const errorMessage = error.message
    //             console.log(errorMessage);
    //         })
    // }

    //github sign in

    // const githubLogIn = () => {
    //     githubSignIn()
    //         .then(result => {
    //             const githubUser = result.user;
    //             console.log(githubUser);
    //         }).catch(error => {
    //             const errorMessage = error.message
    //             console.log(errorMessage);
    //         })
    // }






    return (
        <div className='container my-5 mb-5 '>
            <div className="row bg-warning-subtle w-100 mx-auto bg-warning">
                <h2 className='p-3 text-center'>Please Register</h2>
                <form className='w-100  p-5 mb-3' onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' placeholder='enter your name' required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" name='email' placeholder='enter your email' required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name='password' required placeholder='enter your password' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Photo Url</label>
                        <input type="text" className="form-control" id="photoUrl" name='photoUrl' placeholder='enter your photo url' required />
                    </div>
                    <button type="submit" className="btn bg-warning-subtle fw-bold d-flex w-25 justify-content-center align-items-center mx-auto fs-5">Register</button>
                </form>
                <p className='text-success fw-bold text-center fs-4'>{success}</p>
                <p className='text-danger fw-bold text-center fs-4'>{error}</p>
                <div className='mb-3'>
                    <p className='fs-5 text-center'>Already have account.please <Link to={'/login'} className='text-decoration-none'>Log in</Link></p>
                </div>
                {/* <div className='d-flex flex-column gap-4 justify-content-center align-items-center mb-5'>
                    <button className='btn bg-dark text-white fs-5' onClick={googleLogIn}><i className="fa-brands fa-google"></i> &nbsp;sign in with Google</button>
                    <button className='btn bg-dark text-white fs-5' onClick={githubLogIn} ><i className="fa-brands fa-github"></i> &nbsp;sign in with Github</button>
                </div> */}
            </div>

        </div>
    );
};

export default Register;