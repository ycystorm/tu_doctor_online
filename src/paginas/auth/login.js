import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from 'sweetalert';

const Login = () => {
  //para redireccionar de un componente a otro
  const navigate = useNavigate();

  //definir el estado inicial de las variables
  const [usuario, setUsuario] = useState({
    email: '',
    password: ''
  });

  const { email, password } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };


  useEffect(() => {
    document.getElementById("email").focus();
  }, [])


  const iniciarSesion = async()=>{
    if( password.length <= 6){
      const msg = "Las contraseñas no pueden tener menos de 6 caractres.";
    swal({
    title: "Error",
    text: msg,
    icon: "error",
    buttons: {
        confirm: {
        text: "Ok",
        value: true,
        visible: true,
        className: "btn btn-danger",
        closeModal: true,
        },
    },
    });
  
    } else{    
            const data = {
            email: usuario.email,
            password: usuario.password // Hay que asegurarse que se envie bien al db.json
            };                                          
            const response = await APIInvoke.invokeGET(`/Usuarios`, data);
            const mensaje = response.msg;
           

            if(mensaje === email || mensaje === password){
              const msg = "usuario o contraseña incorrecto.";
              swal({
              title: "Error",
              text: msg,
              icon: "error",
              buttons: {
                  confirm: {
                  text: "Ok",
                  value: true,
                  visible: true,
                  className: "btn btn-danger",
                  closeModal: true,
                  },
              },
              });
            }
    }
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    iniciarSesion()
   
}
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
            <p className="login-box-msg">bienvenido a tu doctor online</p>

            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="social-auth-links text-center mb-3">
              <button type="submit" to={"#"} className="btn btn-block btn-primary">
                Iniciar sesion
              </button>
              <Link to={"/Crear-Cuenta"} className="btn btn-block btn-danger">
                registrarse
              </Link>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
