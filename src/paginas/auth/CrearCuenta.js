import React, { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import APIInvoke from "../../utils/APIInvoke";
import swal from 'sweetalert'
//import swal  from 'sweetalert';

const CrearCuenta = ()  => {

const [usuario, setUsuario]= useState({
 nombre:'',
 email:'',
 password:'',
 confirmar:''
 });
    
 const {nombre, email, password, confirmar} = usuario;
    
    const onChange = (e) =>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    
    useEffect(()=>{
        document.getElementById('Nombre').focus();
    },[])

    const CrearCuenta2 = async () =>{
        if(password !== confirmar){
            const msg = "las contraseñas son diferentes";
            swal({
                title: 'Error',
                Text: msg,
                icon: 'error ',
                buttons: {
                    confirm: {
                        Text: 'ok',
                        value: 'true',
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        }else if (password.length < 6){
            const msg = "la contraseña debe ser almenos de 6 caracteres";
            swal({
                title: 'Error',
                Text: msg,
                icon: 'error ',
                buttons: {
                    confirm: {
                        Text: 'ok',
                        value: 'true',
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }

    }); } else{
            const data = {
                nombre: usuario.nombre,
                email: usuario.email,
                password: usuario.password
            }
            const response = await APIInvoke.invokePOST(`/api/usuarios`, data);
            const mensaje = response.msg;

        }

        /*
        if (mensaje === 'El usuario ya existe'){
            const msg = "el usuario ya existe.";
            swal({
                title: 'Error',
                Text: msg,
                icon: 'error ',
                buttons: {
                    confirm: {
                        Text: 'ok',
                        value: 'true',
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            })
        }
            */

}
    
    const onSubmit = (e) =>{
        e.preventDefault()
        CrearCuenta2();
    }

    return (
    <div class="hold-transition login-page"> 
        <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
              <b>Crear</b> Cuenta 
        </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Ingresa los datos del usuario</p>

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
              <Link to={"/"} className="btn btn-block btn-danger">
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
export default CrearCuenta;