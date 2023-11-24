import React from 'react'
import { Link } from 'react-router-dom'

export default function Content() {
  return (
   <div classname="content-wrapper">
  <div className="content-wrapper">
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Tu Doctor Online</h1>
          </div>
          <div className="col-sm-6">
          </div>
        </div>
      </div>
    </div>
    
    <section className="content" style={{ width: 1550}} >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header border-transparent">
                <h3 className="card-title">Latest Orders</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
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
                        <td><a href="pages/examples/invoice.html">OR9842</a></td>
                        <td>Call of Duty IV</td>
                        <td><span className="badge badge-success">Shipped</span></td>
                        <td>
                          <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR1848</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="badge badge-warning">Pending</span></td>
                        <td>
                          <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                        <td>iPhone 6 Plus</td>
                        <td><span className="badge badge-danger">Delivered</span></td>
                        <td>
                          <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="badge badge-info">Processing</span></td>
                        <td>
                          <div className="sparkbar" data-color="#00c0ef" data-height={20}>90,80,-90,70,-61,83,63</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR1848</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="badge badge-warning">Pending</span></td>
                        <td>
                          <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                        <td>iPhone 6 Plus</td>
                        <td><span className="badge badge-danger">Delivered</span></td>
                        <td>
                          <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR9842</a></td>
                        <td>Call of Duty IV</td>
                        <td><span className="badge badge-success">Shipped</span></td>
                        <td>
                          <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer clearfix">
                <Link to={"#"} className="btn btn-sm btn-info float-left">cancelar cita </Link>
                <Link to={"#"} className="btn btn-sm btn-secondary float-right">agendar cita</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
)
}
