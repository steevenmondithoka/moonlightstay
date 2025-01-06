import React, { useState } from 'react';


const Navbars = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      {/* Navbar Container */}
      <nav className="navbar">
        <h2 className="navbar-logo">MyApp</h2>
        <div className="navbar-hamburger" onClick={toggleSidebar}>
          {/* Hamburger Icon */}
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Sidebar Container */}
      <div className={`sidebar ${sidebar ? 'sidebar-open' : ''}`}>
        <ul className="sidebar-links">
          <li onClick={toggleSidebar}><a href="#home">Home</a></li>
          <li onClick={toggleSidebar}><a href="#about">About</a></li>
          <li onClick={toggleSidebar}><a href="#services">Services</a></li>
          <li onClick={toggleSidebar}><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {sidebar && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Navbars;
