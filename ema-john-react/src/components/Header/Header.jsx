import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="navbar  header w-full">
  <div className="flex-1 px-14">
    <a>
        <img src="./images/favicon.ico" alt="" />
        daisyui
    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Order</a></li>
      <li><a>Order Review</a></li>
      <li><a>Manage Inventory</a></li>
      <li><a>Login</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;