import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Provider/AuthProvider'
import Swal from 'sweetalert2'


export default function Header() {
    const{user,logOut}=useContext(AuthContext);
    const handleLogout=()=>{
        logOut()
        .then(()=>{
            Swal.fire({
                icon: 'success',
                title: 'You are logged out',
              })
        })
        .catch(error=>console.log(error))
      }
  return (
    <nav className="navbar navbar-expand-lg p-3 bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to={'/'} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">About Us</Link>
        </li>
        
        <li className='nav-item'><Link className='nav-link'>{user && <img src={user?.photoURL} className='img-fluid rounded-circle' style={{width:"60px",height:'60px'}}/>}</Link></li>
        
        {
            user?.email ? <>
            <li className="nav-item">    <Link className='nav-link' to={'/bookings'}>My appointments</Link></li>
        <li> <button  className="btn bg-secondary text-white" onClick={handleLogout}>Log out</button></li> 
            </> 
         : 
        <li className="nav-item">
          <Link to={'/login'} className="nav-link">Log in</Link>
        </li>
        }
        
        
      </ul>
    </div>
  </div>
</nav>
  )
}
