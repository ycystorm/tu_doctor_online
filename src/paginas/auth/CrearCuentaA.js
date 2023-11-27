import React, { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import APIInvoke from "../../utils/APIInvoke";
import swal from 'sweetalert';
//import swal  from 'sweetalert';

const CrearCuentaAD = ()  => {

const [usuario, setUsuario]= useState({
 nombre:'',
 email:'',
 password:'',
 confirmar:'',
 rol: 'administrador'
 });
    
 const {nombre, email, password, confirmar, rol } = usuario;
    
    const onChange = (e) =>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    };
    
    useEffect(()=>{
        document.getElementById('Nombre').focus();
    },[])

    const CrearCuenta= async () =>{
      const verificarExistenciaUsuario = async (email, nombre) => {
        try {
          const response = await APIInvoke.invokeGET(
            `/usuarios?email=${email}&nombre=${nombre}`
          );
      
          if (response && response.length > 0) {
            return true; // El usuario ya existe
          } else {
            return false; // El usuario no existe
          }
        } catch (error) {
          console.error(error);
          return false; // Maneja el error si la solicitud falla
        }
      };

if (password !== confirmar) {
    const msg = "Las contraseñas no coinciden.";
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
        }else if (password.length < 6) {
          const msg = "Contraseña demasiado corta (debe ser mayor a 6 caracteres)";
          swal({
              title: 'Error',
              text: msg,
              icon: 'warning',
              buttons: {
                  confirmar:{
                      text: 'Ok',
                      value: true,
                      visible: true,
                      className: 'btn btn-danger',
                      closeModal: true
                  }
              }
          }); } else {
            const usuarioExistente = await verificarExistenciaUsuario(nombre);     
            const data = {
            nombre: usuario.nombre,
            email: usuario.email,
            password: usuario.password,
            confirmar: usuario.confirmar,
            rol: usuario.rol   // Hay que asegurarse que se envie bien al servidor
            };                                          
            const response = await APIInvoke.invokePOST(`/Usuarios`, data);
            const mensaje = response.msg;
    
            if (usuarioExistente) {
                const msg = 'El usuario ya existe'
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
            } else {
                    const msg = "El usuario fue creado correctamente";
                    swal({
                    title: "Información",
                    text: msg,
                    icon: "success",  
                    buttons: {
                        confirm: {
                        text: "Ok",
                        value: true,
                        visible: true,
                        className: "btn btn-danger",
                        closeModal: true,
                            }
                        }
                    });
    
                    setUsuario({
                        nombre: "",
                        email: "",
                        password: "",
                        confirmar: "",
                        rol: "administrador"
    
                    })
                }
            }
        }

    const onSubmit = (e) =>{
        e.preventDefault()
        CrearCuenta();
    }

    return (
    <div class="hold-transition login-page" style={{ backgroundColor:"#e2e2e2"}}> 
        <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
              <b>Crear</b> Cuenta administrador 
        </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Ingresa los datos del administrador</p>
            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Nombre" 
                id="Nombre"  
                name="nombre" 
                value={nombre} 
                onChange={onChange}
                required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="email" 
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
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" 
                className="form-control" 
                placeholder="password" 
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
              <div className="input-group mb-3">
                <input type="password" 
                className="form-control" 
                placeholder="confirmar contraseña" 
                id="password2"  
                name="confirmar" 
                value={confirmar} 
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
                 crear cuenta
              </button>
              <Link to={"/Login"} className="btn btn-block btn-danger">
                 regresar al login 
              </Link>
            </div>
            </form>
          </div>
        </div>  
      </div>
      </div>
    )
    }
export default CrearCuentaAD;