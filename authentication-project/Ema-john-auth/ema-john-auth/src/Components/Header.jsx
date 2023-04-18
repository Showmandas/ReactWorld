import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    // console.log(user.displayName);

    const handleLogout=()=>{
        logOut()
        .then(result=>{})
        .catch(error=>{})
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to={'/'} className="nav-link">Home</Link>
        <Link to={'/register'} className="nav-link">Register </Link>
        <Link to={'/login'} className="nav-link">Login</Link>
        <Link className="nav-link">{user && <span>{user.email} <button className='btn btn-warning' onClick={handleLogout}>Sign out</button></span> }</Link>
      </div>
    </div>
  </div>
</nav>
    );
};

export default Header;