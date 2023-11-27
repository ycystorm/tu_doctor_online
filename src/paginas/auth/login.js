import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from 'sweetalert';

const Login = () => {
  //Este método es para redireccionar un componente a otro
  const navigate = useNavigate();

  //Definir el estado inicial de las variables
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
  }

  useEffect(() => {
      document.getElementById("email").focus();
  }, [])


  const iniciarSesion = async () => {
      const verificarExistenciaUsuario = async (email, password) => {
          try {
              const response = await APIInvoke.invokeGET(
                  `/Usuarios?email=${email}&password=${password}`
              );
              if (response && response.length > 0) {
                  return response[0]; // Devuelve el primer usuario que coincide
              }
              return null; // El usuario no existe
          } catch (error) {
              console.error(error);
              return null; // Maneja el error si la solicitud falla
          }
      };

      if(password.length < 6){
          const msg = "Contraseña demasiado corta (debe ser mayor a 6 caracteres)";
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
      }else{
        const usuarioExistente = await verificarExistenciaUsuario(email, password);
        const response = await APIInvoke.invokeGET(
            `/Usuarios?email=${email}&password=${password}`
        );

        if (!usuarioExistente) {
          const msg = "usuario o contraseña incorrecto.";
          new swal({
              title: 'Error',
              text: msg,
              icon: 'error',
              buttons: {
                  confirm: {
                      text: 'Ok',
                      value: true,
                      visible: true,
                      className: 'btn btn-danger',
                      closeModal: true
                  }
              }
          });
      }else {
        if (usuarioExistente.rol === 'usuario') {
            navigate("/home", usuarioExistente.id);
        } else if(usuarioExistente.rol === 'administrador'){
          navigate("/menuA")
        } else {
            navigate("/");
        }
    }
      }
  }


  const onSubmit = (e) => {
      e.preventDefault();
      iniciarSesion();
  }
  return (
    <div class="hold-transition login-page"  style={{ backgroundColor:"#e2e2e2"}}>
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
            <b>Iniciar</b> sessión
          </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">bienvenido a tu doctor online</p>

            <form onSubmit={onSubmit}  >
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
