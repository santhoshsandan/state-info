import React from 'react';



function Navbar() {
  return (
    <div className='navbar'>
    <nav className='nav'>
     
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li> 
        <li><a href="/Signup">Signup</a></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
