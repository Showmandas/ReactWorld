/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to={'/'} className="nav-link" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/users'} className="nav-link" href="#">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Pricing</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
