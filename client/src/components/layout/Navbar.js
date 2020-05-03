import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <a href='index.html'>
          <i className='fas fa-car'></i> theAutobahn
        </a>
      </h1>
      <ul>
        <li>
          <a href='profiles.html'>Tom</a>
        </li>
        <li>
          <a href='register.html'>Dick</a>
        </li>
        <li>
          <a href='login.html'>Harry</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
