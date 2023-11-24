import React from "react";
import { Link } from "react-router-dom";

export default function AsideA() {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <Link to={"#"} className="d-block">
                Administrador
              </Link>
            </div>
          </div>
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              
           
              <li className="nav-item">
                <Link href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    agendar cita
                    <span className="right badge badge-danger">New</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"#"} className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    solicitud de la cita
                    <span className="badge badge-info right">A</span>
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}
