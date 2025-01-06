import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';

const Navy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const user = JSON.parse(localStorage.getItem('currentUser'));


  function logout() {
    localStorage.removeItem('currentUser')
    window.location.href = '/login'
  }

  return (
    <nav className="navbar bs">
      <div className="navbar-logo">
      <div class="animated-heading">MoonlightStay</div>
      
      
       
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/rooms">Book Now</a></li>
          <li><a href='/services'>Services</a></li>
          <li><a href='/about'>About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href='/gallery'>Gallery</a></li>

          {user ? (

<>
  <div className="dropdown mt-3">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <Badge>
        <Avatar
          style={{
            backgroundColor:'green', marginTop: '-2.5px'

          }}
          icon={<UserOutlined />}
        />
      </Badge>
      &nbsp;
      {user.name}
    </button>
    <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item swt" href="/profile" >Profile</a>
      <a className="dropdown-item swt " href="#" onClick={logout}>Logout</a>

    </div>
  </div>

</>

) : (<>

<li><a href="/register">Register</a></li>
                <li><a href="/login"><i className='fa-solid fa-user' />&nbsp; Login</a></li>

              </>)}
        </ul>
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navy;
