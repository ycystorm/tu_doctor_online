import React from "react";
import { Link } from "react-router-dom";

const sidebarContainer = () => {
  return (
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <Link to={"#"} class="brand-link">
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </Link>

      <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="info">
            <Link to={"#"} class="d-block">
              Alexander Pierce
            </Link>
          </div>
        </div>

        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                  <i class="right fas fa-angle-left"></i>
                </p>
              </Link>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Dashboard v1</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Dashboard v2</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Dashboard v3</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>
                  Widgets
                  <span class="right badge badge-danger">New</span>
                </p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon fas fa-copy"></i>
                <p>
                  Layout Options
                  <i class="fas fa-angle-left right"></i>
                  <span class="badge badge-info right">6</span>
                </p>
              </Link>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Top Navigation</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Top Navigation + Sidebar</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Boxed</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Fixed Sidebar</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to={"#"}
                    class="nav-link"
                  >
                    <i class="far fa-circle nav-icon"></i>
                    <p>
                      Fixed Sidebar <small>+ Custom Area</small>
                    </p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Fixed Navbar</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Fixed Footer</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to={"#"}
                    class="nav-link"
                  >
                    <i class="far fa-circle nav-icon"></i>
                    <p>Collapsed Sidebar</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon fas fa-chart-pie"></i>
                <p>
                  Charts
                  <i class="right fas fa-angle-left"></i>
                </p>
              </Link>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>ChartJS</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Flot</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Inline</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>uPlot</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon fas fa-tree"></i>
                <p>
                  UI Elements
                  <i class="fas fa-angle-left right"></i>
                </p>
              </Link>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>General</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Icons</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Buttons</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Sliders</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Modals & Alerts</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Navbar & Tabs</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Timeline</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Ribbons</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon fas fa-edit"></i>
                <p>
                  Forms
                  <i class="fas fa-angle-left right"></i>
                </p>
              </Link>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <Link hto={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>General Elements</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link hto={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Advanced Elements</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Editors</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Validation</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon fas fa-table"></i>
                <p>
                  Tables
                  <i class="fas fa-angle-left right"></i>
                </p>
              </Link>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Simple Tables</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>DataTables</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>jsGrid</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-header">EXAMPLES</li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon far fa-calendar-alt"></i>
                <p>
                  Calendar
                  <span class="badge badge-info right">2</span>
                </p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon far fa-image"></i>
                <p>Gallery</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon fas fa-columns"></i>
                <p>Kanban Board</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon far fa-envelope"></i>
                <p>
                  Mailbox
                  <i class="fas fa-angle-left right"></i>
                </p>
              </Link>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Inbox</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Compose</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Read</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon fas fa-book"></i>
                <p>
                  Pages
                  <i class="fas fa-angle-left right"></i>
                </p>
              </Link>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Invoice</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Profile</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>E-commerce</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Projects</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Project Add</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Project Edit</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Project Detail</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"}  class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Contacts</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"}  class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>FAQ</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"}  class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Contact us</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item menu-open">
              <Link to={"#"} class="nav-link active">
                <i class="nav-icon far fa-plus-square"></i>
                <p>
                  Extras
                  <i class="fas fa-angle-left right"></i>
                </p>
              </Link>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>
                      Login & Register v1
                      <i class="fas fa-angle-left right"></i>
                    </p>
                  </Link>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                      <Link to={"#"} class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Login v1</p>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"#"} class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Register v1</p>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        to={"#"}
                        class="nav-link"
                      >
                        <i class="far fa-circle nav-icon"></i>
                        <p>Forgot Password v1</p>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        to={"#"}
                        class="nav-link"
                      >
                        <i class="far fa-circle nav-icon"></i>
                        <p>Recover Password v1</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>
                      Login & Register v2
                      <i class="fas fa-angle-left right"></i>
                    </p>
                  </Link>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                      <Link hto={"#"} class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Login v2</p>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        to={"#"}
                        class="nav-link"
                      >
                        <i class="far fa-circle nav-icon"></i>
                        <p>Register v2</p>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        to={"#"}
                        class="nav-link"
                      >
                        <i class="far fa-circle nav-icon"></i>
                        <p>Forgot Password v2</p>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link
                        to={"#"}
                        class="nav-link"
                      >
                        <i class="far fa-circle nav-icon"></i>
                        <p>Recover Password v2</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Lockscreen</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                   to={"#"}
                    class="nav-link"
                  >
                    <i class="far fa-circle nav-icon"></i>
                    <p>Legacy User Menu</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Language Menu</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Error 404</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Error 500</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Pace</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link active">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Blank Page</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Starter Page</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon fas fa-search"></i>
                <p>
                  Search
                  <i class="fas fa-angle-left right"></i>
                </p>
              </Link>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <Link hto={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Simple Search</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Enhanced</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-header">MISCELLANEOUS</li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon fas fa-ellipsis-h"></i>
                <p>Tabbed IFrame Plugin</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon fas fa-file"></i>
                <p>Documentation</p>
              </Link>
            </li>
            <li class="nav-header">MULTI LEVEL EXAMPLE</li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="fas fa-circle nav-icon"></i>
                <p>Level 1</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon fas fa-circle"></i>
                <p>
                  Level 1<i class="right fas fa-angle-left"></i>
                </p>
              </Link>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Level 2</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>
                      Level 2<i class="right fas fa-angle-left"></i>
                    </p>
                  </Link>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                      <Link to={"#"} class="nav-link">
                        <i class="far fa-dot-circle nav-icon"></i>
                        <p>Level 3</p>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"#"} class="nav-link">
                        <i class="far fa-dot-circle nav-icon"></i>
                        <p>Level 3</p>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to={"#"} class="nav-link">
                        <i class="far fa-dot-circle nav-icon"></i>
                        <p>Level 3</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link to={"#"} class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Level 2</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="fas fa-circle nav-icon"></i>
                <p>Level 1</p>
              </Link>
            </li>
            <li class="nav-header">LABELS</li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon far fa-circle text-danger"></i>
                <p class="text">Important</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon far fa-circle text-warning"></i>
                <p>Warning</p>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"#"} class="nav-link">
                <i class="nav-icon far fa-circle text-info"></i>
                <p>Informational</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default sidebarContainer;
