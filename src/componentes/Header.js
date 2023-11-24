import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed" >
      <nav className="main-header navbar navbar-expand navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" data-widget="pushmenu" to={"#"} role="button">
            <i className="fas fa-bars" />
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to={"/"} className="nav-link">
            salir
          </Link>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">   
        <li className="nav-item">
          <Link
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
}
