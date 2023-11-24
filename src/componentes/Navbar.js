import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div >
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            < Link  
              className="nav-link"
              data-widget="pushmenu"
              to={"#"}
              role="button"
            >
              <i className="fas fa-bars" />
            </Link> 
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            < Link to="../../index3.html" className="nav-link">
              salir
            </Link> 
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            < Link  
              className="nav-link"
              data-widget="fullscreen"
              to={"#"}
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </Link> 
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
