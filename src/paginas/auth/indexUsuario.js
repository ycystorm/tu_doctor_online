import React from "react";
import { Link } from "react-router-dom";

const indexUsuario = () => {
  return (
    <div class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      <div className="wrapper">
        <div className="preloader flex-column justify-content-center align-items-center">
          <img
            className="animation__wobble"
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTELogo"
            height={60}
            width={60}
          />
        </div>
        <nav className="main-header navbar navbar-expand navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                data-widget="pushmenu"
                to="#"
                role="button"
              >
                <i className="fas fa-bars" />
              </Link>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Link to="index3.html" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Link to="#" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                data-widget="navbar-search"
                to="#"
                role="button"
              >
                <i className="fas fa-search" />
              </Link>
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input
                      className="form-control form-control-navbar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                      </button>
                      <button
                        className="btn btn-navbar"
                        type="button"
                        data-widget="navbar-search"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link" data-toggle="dropdown" to="#">
                <i className="far fa-comments" />
                <span className="badge badge-danger navbar-badge">3</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <Link to="#" className="dropdown-item">
                  <div className="media">
                    <img
                      src="dist/img/user1-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 mr-3 img-circle"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-right text-sm text-danger">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">Call me whenever you can...</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item">
                  <div className="media">
                    <img
                      src="dist/img/user8-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="float-right text-sm text-muted">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">I got your message bro</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item">
                  <div className="media">
                    <img
                      src="dist/img/user3-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="float-right text-sm text-warning">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">The subject goes here</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item dropdown-footer">
                  See All Messages
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link" data-toggle="dropdown" to="#">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">
                  15 Notifications
                </span>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2" /> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </Link>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item">
                  <i className="fas fa-users mr-2" /> 8 friend requests
                  <span className="float-right text-muted text-sm">
                    12 hours
                  </span>
                </Link>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item">
                  <i className="fas fa-file mr-2" /> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </Link>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item dropdown-footer">
                  See All Notifications
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                data-widget="fullscreen"
                to="#"
                role="button"
              >
                <i className="fas fa-expand-arrows-alt" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
                to="#"
                role="button"
              >
                <i className="fas fa-th-large" />
              </Link>
            </li>
          </ul>
        </nav>

        <Link side className="main-sidebar sidebar-dark-primary elevation-4" />

        <Link to="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </Link>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image"></div>
            <div className="info">
              <Link to="#" className="d-block">
                Alexander Pierce
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
              <li className="nav-item menu-open">
                <Link to="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="./index.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v1</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="./index2.html" className="nav-link active">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v2</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="./index3.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v3</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Widgets
                    <span className="right badge badge-danger">New</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    Layout Options
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right">6</span>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/layout/top-nav-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation + Sidebar</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/layout/boxed.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Boxed</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/layout/fixed-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Sidebar</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/layout/fixed-sidebar-custom.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Fixed Sidebar <small>+ Custom Area</small>
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/layout/fixed-topnav.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Navbar</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/layout/fixed-footer.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Footer</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/layout/collapsed-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Collapsed Sidebar</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                  <p>
                    Charts
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/charts/chartjs.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>ChartJS</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/charts/flot.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Flot</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/charts/inline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inline</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/charts/uplot.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>uPlot</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-tree" />
                  <p>
                    UI Elements
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/UI/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>General</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/UI/icons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Icons</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/UI/buttons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Buttons</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/UI/sliders.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sliders</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/UI/modals.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Modals &amp; Alerts</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/UI/navbar.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Navbar &amp; Tabs</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/UI/timeline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Timeline</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/UI/ribbons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Ribbons</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Forms
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/forms/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>General Elements</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/forms/advanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Advanced Elements</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/forms/editors.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Editors</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/forms/validation.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Validation</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Tables
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/tables/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Simple Tables</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/tables/data.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>DataTables</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>jsGrid</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-header">EXAMPLES</li>
              <li className="nav-item">
                <Link to="pages/calendar.html" className="nav-link">
                  <i className="nav-icon fas fa-calendar-alt" />
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pages/gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>Gallery</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pages/kanban.html" className="nav-link">
                  <i className="nav-icon fas fa-columns" />
                  <p>Kanban Board</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon far fa-envelope" />
                  <p>
                    Mailbox
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/mailbox/mailbox.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inbox</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/mailbox/compose.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Compose</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/mailbox/read-mail.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Read</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-book" />
                  <p>
                    Pages
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/examples/invoice.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Invoice</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/examples/profile.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Profile</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/e-commerce.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>E-commerce</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/projects.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Projects</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/project-add.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Project Add</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/project-edit.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Project Edit</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/project-detail.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Project Detail</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/contacts.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Contacts</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/examples/faq.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>FAQ</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/contact-us.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Contact us</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>
                    Extras
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Login &amp; Register v1
                        <i className="fas fa-angle-left right" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link
                          to="pages/examples/login.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Login v1</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="pages/examples/register.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Register v1</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="pages/examples/forgot-password.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Forgot Password v1</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="pages/examples/recover-password.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Recover Password v1</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Login &amp; Register v2
                        <i className="fas fa-angle-left right" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link
                          to="pages/examples/login-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Login v2</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="pages/examples/register-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Register v2</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="pages/examples/forgot-password-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Forgot Password v2</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="pages/examples/recover-password-v2.html"
                          className="nav-link"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Recover Password v2</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/lockscreen.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Lockscreen</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/legacy-user-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Legacy User Menu</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="pages/examples/language-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Language Menu</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/examples/404.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Error 404</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/examples/500.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Error 500</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/examples/pace.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pace</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/examples/blank.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Blank Page</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="starter.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Starter Page</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-search" />
                  <p>
                    Search
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/search/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Simple Search</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="pages/search/enhanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Enhanced</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-header">MISCELLANEOUS</li>
              <li className="nav-item">
                <Link to="iframe.html" className="nav-link">
                  <i className="nav-icon fas fa-ellipsis-h" />
                  <p>Tabbed IFrame Plugin</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="https://adminlte.io/docs/3.1/" className="nav-link">
                  <i className="nav-icon fas fa-file" />
                  <p>Documentation</p>
                </Link>
              </li>
              <li className="nav-header">MULTI LEVEL EXAMPLE</li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Level 1</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-circle" />
                  <p>
                    Level 1
                    <i className="right fas fa-angle-left" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Level 2
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Level 1</p>
                </Link>
              </li>
              <li className="nav-header">LABELS</li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger" />
                  <p className="text">Important</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning" />
                  <p>Warning</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info" />
                  <p>Informational</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Dashboard v2</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Dashboard v2</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1">
                      <i className="fas fa-cog" />
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-text">CPU Traffic</span>
                      <span className="info-box-number">
                        10
                        <small>%</small>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-danger elevation-1">
                      <i className="fas fa-thumbs-up" />
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-text">Likes</span>
                      <span className="info-box-number">41,410</span>
                    </div>
                  </div>
                </div>
                <div className="clearfix hidden-md-up" />
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-success elevation-1">
                      <i className="fas fa-shopping-cart" />
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-text">Sales</span>
                      <span className="info-box-number">760</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-warning elevation-1">
                      <i className="fas fa-users" />
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-text">New Members</span>
                      <span className="info-box-number">2,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Monthly Recap Report</h5>
                      <div className="card-tools">
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-tool dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <i className="fas fa-wrench" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            role="menu"
                          >
                            <Link to="#" className="dropdown-item">
                              Action
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Another action
                            </Link>
                            <Link to="#" className="dropdown-item">
                              Something else here
                            </Link>
                            <Link className="dropdown-divider" />
                            <Link to="#" className="dropdown-item">
                              Separated link
                            </Link>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-8">
                          <p className="text-center">
                            <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                          </p>
                          <div className="chart">
                            <canvas
                              id="salesChart"
                              height={180}
                              style={{ height: 180 }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <p className="text-center">
                            <strong>Goal Completion</strong>
                          </p>
                          <div className="progress-group">
                            Add Products to Cart
                            <span className="float-right">
                              <b>160</b>/200
                            </span>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "80%" }}
                              />
                            </div>
                          </div>
                          <div className="progress-group">
                            Complete Purchase
                            <span className="float-right">
                              <b>310</b>/400
                            </span>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar bg-danger"
                                style={{ width: "75%" }}
                              />
                            </div>
                          </div>
                          <div className="progress-group">
                            <span className="progress-text">
                              Visit Premium Page
                            </span>
                            <span className="float-right">
                              <b>480</b>/800
                            </span>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar bg-success"
                                style={{ width: "60%" }}
                              />
                            </div>
                          </div>
                          <div className="progress-group">
                            Send Inquiries
                            <span className="float-right">
                              <b>250</b>/500
                            </span>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: "50%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="row">
                        <div className="col-sm-3 col-6">
                          <div className="description-block border-right">
                            <span className="description-percentage text-success">
                              <i className="fas fa-caret-up" /> 17%
                            </span>
                            <h5 className="description-header">$35,210.43</h5>
                            <span className="description-text">
                              TOTAL REVENUE
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="description-block border-right">
                            <span className="description-percentage text-warning">
                              <i className="fas fa-caret-left" /> 0%
                            </span>
                            <h5 className="description-header">$10,390.90</h5>
                            <span className="description-text">TOTAL COST</span>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="description-block border-right">
                            <span className="description-percentage text-success">
                              <i className="fas fa-caret-up" /> 20%
                            </span>
                            <h5 className="description-header">$24,813.53</h5>
                            <span className="description-text">
                              TOTAL PROFIT
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="description-block">
                            <span className="description-percentage text-danger">
                              <i className="fas fa-caret-down" /> 18%
                            </span>
                            <h5 className="description-header">1200</h5>
                            <span className="description-text">
                              GOAL COMPLETIONS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">US-Visitors Report</h3>
                      <div className="card-tools">
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-md-flex">
                        <div
                          className="p-1 flex-fill"
                          style={{ overflow: "hidden" }}
                        >
                          <div
                            id="world-map-markers"
                            style={{ height: 325, overflow: "hidden" }}
                          >
                            <div className="map" />
                          </div>
                        </div>
                        <div className="card-pane-right bg-success pt-2 pb-2 pl-4 pr-4">
                          <div className="description-block mb-4">
                            <div className="sparkbar pad" data-color="#fff">
                              90,70,90,70,75,80,70
                            </div>
                            <h5 className="description-header">8390</h5>
                            <span className="description-text">Visits</span>
                          </div>
                          <div className="description-block mb-4">
                            <div className="sparkbar pad" data-color="#fff">
                              90,50,90,70,61,83,63
                            </div>
                            <h5 className="description-header">30%</h5>
                            <span className="description-text">Referrals</span>
                          </div>
                          <div className="description-block">
                            <div className="sparkbar pad" data-color="#fff">
                              90,50,90,70,61,83,63
                            </div>
                            <h5 className="description-header">70%</h5>
                            <span className="description-text">Organic</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card direct-chat direct-chat-warning">
                        <div className="card-header">
                          <h3 className="card-title">Direct Chat</h3>
                          <div className="card-tools">
                            <span
                              title="3 New Messages"
                              className="badge badge-warning"
                            >
                              3
                            </span>
                            <button
                              type="button"
                              className="btn btn-tool"
                              data-card-widget="collapse"
                            >
                              <i className="fas fa-minus" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-tool"
                              title="Contacts"
                              data-widget="chat-pane-toggle"
                            >
                              <i className="fas fa-comments" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-tool"
                              data-card-widget="remove"
                            >
                              <i className="fas fa-times" />
                            </button>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="direct-chat-messages">
                            <div className="direct-chat-msg">
                              <div className="direct-chat-infos clearfix">
                                <span className="direct-chat-name float-left">
                                  Alexander Pierce
                                </span>
                                <span className="direct-chat-timestamp float-right">
                                  23 Jan 2:00 pm
                                </span>
                              </div>

                              <div className="direct-chat-text">
                                Is this template really for free? That's
                                unbelievable!
                              </div>
                            </div>
                            <div className="direct-chat-msg right">
                              <div className="direct-chat-infos clearfix">
                                <span className="direct-chat-name float-right">
                                  Sarah Bullock
                                </span>
                                <span className="direct-chat-timestamp float-left">
                                  23 Jan 2:05 pm
                                </span>
                              </div>

                              <div className="direct-chat-text">
                                You better believe it!
                              </div>
                            </div>
                            <div className="direct-chat-msg">
                              <div className="direct-chat-infos clearfix">
                                <span className="direct-chat-name float-left">
                                  Alexander Pierce
                                </span>
                                <span className="direct-chat-timestamp float-right">
                                  23 Jan 5:37 pm
                                </span>
                              </div>

                              <div className="direct-chat-text">
                                Working with AdminLTE on a great new app! Wanna
                                join?
                              </div>
                            </div>
                            <div className="direct-chat-msg right">
                              <div className="direct-chat-infos clearfix">
                                <span className="direct-chat-name float-right">
                                  Sarah Bullock
                                </span>
                                <span className="direct-chat-timestamp float-left">
                                  23 Jan 6:10 pm
                                </span>
                              </div>

                              <div className="direct-chat-text">
                                I would love to.
                              </div>
                            </div>
                          </div>
                          <div className="direct-chat-contacts">
                            <ul className="contacts-list">
                              <li>
                                <Link to="#">
                                  <img
                                    className="contacts-list-img"
                                    src="dist/img/user1-128x128.jpg"
                                    alt="User Avatar"
                                  />
                                  <div className="contacts-list-info">
                                    <span className="contacts-list-name">
                                      Count Dracula
                                      <small className="contacts-list-date float-right">
                                        2/28/2015
                                      </small>
                                    </span>
                                    <span className="contacts-list-msg">
                                      How have you been? I was...
                                    </span>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    className="contacts-list-img"
                                    src="dist/img/user7-128x128.jpg"
                                    alt="User Avatar"
                                  />
                                  <div className="contacts-list-info">
                                    <span className="contacts-list-name">
                                      Sarah Doe
                                      <small className="contacts-list-date float-right">
                                        2/23/2015
                                      </small>
                                    </span>
                                    <span className="contacts-list-msg">
                                      I will be waiting for...
                                    </span>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    className="contacts-list-img"
                                    src="dist/img/user3-128x128.jpg"
                                    alt="User Avatar"
                                  />
                                  <div className="contacts-list-info">
                                    <span className="contacts-list-name">
                                      Nadia Jolie
                                      <small className="contacts-list-date float-right">
                                        2/20/2015
                                      </small>
                                    </span>
                                    <span className="contacts-list-msg">
                                      I'll call you back at...
                                    </span>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    className="contacts-list-img"
                                    src="dist/img/user5-128x128.jpg"
                                    alt="User Avatar"
                                  />
                                  <div className="contacts-list-info">
                                    <span className="contacts-list-name">
                                      Nora S. Vans
                                      <small className="contacts-list-date float-right">
                                        2/10/2015
                                      </small>
                                    </span>
                                    <span className="contacts-list-msg">
                                      Where is your new...
                                    </span>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    className="contacts-list-img"
                                    src="dist/img/user6-128x128.jpg"
                                    alt="User Avatar"
                                  />
                                  <div className="contacts-list-info">
                                    <span className="contacts-list-name">
                                      John K.
                                      <small className="contacts-list-date float-right">
                                        1/27/2015
                                      </small>
                                    </span>
                                    <span className="contacts-list-msg">
                                      Can I take a look at...
                                    </span>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <img
                                    className="contacts-list-img"
                                    src="dist/img/user8-128x128.jpg"
                                    alt="User Avatar"
                                  />
                                  <div className="contacts-list-info">
                                    <span className="contacts-list-name">
                                      Kenneth M.
                                      <small className="contacts-list-date float-right">
                                        1/4/2015
                                      </small>
                                    </span>
                                    <span className="contacts-list-msg">
                                      Never mind I found...
                                    </span>
                                  </div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-footer">
                          <form action="#" method="post">
                            <div className="input-group">
                              <input
                                type="text"
                                name="message"
                                placeholder="Type Message ..."
                                className="form-control"
                              />
                              <span className="input-group-append">
                                <button
                                  type="button"
                                  className="btn btn-warning"
                                >
                                  Send
                                </button>
                              </span>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Latest Members</h3>
                          <div className="card-tools">
                            <span className="badge badge-danger">
                              8 New Members
                            </span>
                            <button
                              type="button"
                              className="btn btn-tool"
                              data-card-widget="collapse"
                            >
                              <i className="fas fa-minus" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-tool"
                              data-card-widget="remove"
                            >
                              <i className="fas fa-times" />
                            </button>
                          </div>
                        </div>
                        <div className="card-body p-0">
                          <ul className="users-list clearfix">
                            <li>
                              <Link className="users-list-name" to="#">
                                Alexander Pierce
                              </Link>
                              <span className="users-list-date">Today</span>
                            </li>
                            <li>
                              <Link className="users-list-name" to="#">
                                Norman
                              </Link>
                              <span className="users-list-date">Yesterday</span>
                            </li>
                            <li>
                              <Link className="users-list-name" to="#">
                                Jane
                              </Link>
                              <span className="users-list-date">12 Jan</span>
                            </li>
                            <li>
                              <Link className="users-list-name" to="#">
                                John
                              </Link>
                              <span className="users-list-date">12 Jan</span>
                            </li>
                            <li>
                              <Link className="users-list-name" to="#">
                                Alexander
                              </Link>
                              <span className="users-list-date">13 Jan</span>
                            </li>
                            <li>
                              <Link className="users-list-name" to="#">
                                Sarah
                              </Link>
                              <span className="users-list-date">14 Jan</span>
                            </li>
                            <li>
                              <Link className="users-list-name" to="#">
                                Nora
                              </Link>
                              <span className="users-list-date">15 Jan</span>
                            </li>
                            <li>
                              <Link className="users-list-name" to="#">
                                Nadia
                              </Link>
                              <span className="users-list-date">15 Jan</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header border-transparent">
                      <h3 className="card-title">Latest Orders</h3>
                      <div className="card-tools">
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-tool"
                          data-card-widget="remove"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table className="table m-0">
                            <thead>
                              <tr>
                                <th>Order ID</th>
                                <th>Item</th>
                                <th>Status</th>
                                <th>Popularity</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <Link to="pages/examples/invoice.html">
                                    OR9842
                                  </Link>
                                </td>
                                <td>Call of Duty IV</td>
                                <td>
                                  <span className="badge badge-success">
                                    Shipped
                                  </span>
                                </td>
                                <td>
                                  <div
                                    className="sparkbar"
                                    data-color="#00a65a"
                                    data-height={20}
                                  >
                                    90,80,90,-70,61,-83,63
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link to="pages/examples/invoice.html">
                                    OR1848
                                  </Link>
                                </td>
                                <td>Samsung Smart TV</td>
                                <td>
                                  <span className="badge badge-warning">
                                    Pending
                                  </span>
                                </td>
                                <td>
                                  <div
                                    className="sparkbar"
                                    data-color="#f39c12"
                                    data-height={20}
                                  >
                                    90,80,-90,70,61,-83,68
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link to="pages/examples/invoice.html">
                                    OR7429
                                  </Link>
                                </td>
                                <td>iPhone 6 Plus</td>
                                <td>
                                  <span className="badge badge-danger">
                                    Delivered
                                  </span>
                                </td>
                                <td>
                                  <div
                                    className="sparkbar"
                                    data-color="#f56954"
                                    data-height={20}
                                  >
                                    90,-80,90,70,-61,83,63
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link to="pages/examples/invoice.html">
                                    OR7429
                                  </Link>
                                </td>
                                <td>Samsung Smart TV</td>
                                <td>
                                  <span className="badge badge-info">
                                    Processing
                                  </span>
                                </td>
                                <td>
                                  <div
                                    className="sparkbar"
                                    data-color="#00c0ef"
                                    data-height={20}
                                  >
                                    90,80,-90,70,-61,83,63
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link to="pages/examples/invoice.html">
                                    OR1848
                                  </Link>
                                </td>
                                <td>Samsung Smart TV</td>
                                <td>
                                  <span className="badge badge-warning">
                                    Pending
                                  </span>
                                </td>
                                <td>
                                  <div
                                    className="sparkbar"
                                    data-color="#f39c12"
                                    data-height={20}
                                  >
                                    90,80,-90,70,61,-83,68
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link to="pages/examples/invoice.html">
                                    OR7429
                                  </Link>
                                </td>
                                <td>iPhone 6 Plus</td>
                                <td>
                                  <span className="badge badge-danger">
                                    Delivered
                                  </span>
                                </td>
                                <td>
                                  <div
                                    className="sparkbar"
                                    data-color="#f56954"
                                    data-height={20}
                                  >
                                    90,-80,90,70,-61,83,63
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link to="pages/examples/invoice.html">
                                    OR9842
                                  </Link>
                                </td>
                                <td>Call of Duty IV</td>
                                <td>
                                  <span className="badge badge-success">
                                    Shipped
                                  </span>
                                </td>
                                <td>
                                  <div
                                    className="sparkbar"
                                    data-color="#00a65a"
                                    data-height={20}
                                  >
                                    90,80,90,-70,61,-83,63
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info-box mb-3 bg-warning">
                      <span className="info-box-icon">
                        <i className="fas fa-tag" />
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text">Inventory</span>
                        <span className="info-box-number">5,200</span>
                      </div>
                    </div>
                    <div className="info-box mb-3 bg-success">
                      <span className="info-box-icon">
                        <i className="far fa-heart" />
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text">Mentions</span>
                        <span className="info-box-number">92,050</span>
                      </div>
                    </div>
                    <div className="info-box mb-3 bg-danger">
                      <span className="info-box-icon">
                        <i className="fas fa-cloud-download-alt" />
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text">Downloads</span>
                        <span className="info-box-number">114,381</span>
                      </div>
                    </div>
                    <div className="info-box mb-3 bg-info">
                      <span className="info-box-icon">
                        <i className="far fa-comment" />
                      </span>
                      <div className="info-box-content">
                        <span className="info-box-text">Direct Messages</span>
                        <span className="info-box-number">163,921</span>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Browser Usage</h3>
                        <div className="card-tools">
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="remove"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="chart-responsive">
                              <canvas id="pieChart" height={150} />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <ul className="chart-legend clearfix">
                              <li>
                                <i className="far fa-circle text-danger" />{" "}
                                Chrome
                              </li>
                              <li>
                                <i className="far fa-circle text-success" /> IE
                              </li>
                              <li>
                                <i className="far fa-circle text-warning" />{" "}
                                FireFox
                              </li>
                              <li>
                                <i className="far fa-circle text-info" /> Safari
                              </li>
                              <li>
                                <i className="far fa-circle text-primary" />{" "}
                                Opera
                              </li>
                              <li>
                                <i className="far fa-circle text-secondary" />{" "}
                                Navigator
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <ul className="nav nav-pills flex-column">
                          <li className="nav-item">
                            <Link to="#" className="nav-link">
                              United States of America
                              <span className="float-right text-danger">
                                <i className="fas fa-arrow-down text-sm" />
                                12%
                              </span>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#" className="nav-link">
                              India
                              <span className="float-right text-success">
                                <i className="fas fa-arrow-up text-sm" /> 4%
                              </span>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#" className="nav-link">
                              China
                              <span className="float-right text-warning">
                                <i className="fas fa-arrow-left text-sm" /> 0%
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Recently Added Products</h3>
                        <div className="card-tools">
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="remove"
                          >
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <ul className="products-list product-list-in-card pl-2 pr-2">
                          <li className="item">
                            <div className="product-img"></div>
                          </li>
                          <li className="item">
                            <div className="product-img"></div>
                          </li>
                          <li className="item">
                            <div className="product-img"></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Link side className="control-sidebar control-sidebar-dark" />
      </div>
    </div>
  )
}

export default indexUsuario;
