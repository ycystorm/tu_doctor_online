import React from "react";
import {Link} from 'react-router-dom';

const Login = () => {
    return (
<div class="hold-transition login-page"> 
  <div className="login-box">
  <div className="login-logo">
    <Link to={"#"}>
        <b>Iniciar</b> sessión 
  </Link>
  </div>
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">bienvenido atu doctor online</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" 
          id="email" 
          name="email"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" id="password"  name="password"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
      </form>
      <div className="social-auth-links text-center mb-3">
        <Link to={"/index-usuario"} className="btn btn-block btn-primary">
           Iniciar sesion
        </Link>
        <Link to={"/Crear-Cuenta"} className="btn btn-block btn-danger">
           registrarse 
        </Link>
      </div>
    </div>
  </div>
</div>
</div>
);
}

export default Login;