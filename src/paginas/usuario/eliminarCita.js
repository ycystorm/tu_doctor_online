import React, { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import APIInvoke from "../../utils/APIInvoke";
import swal from 'sweetalert';

//import swal  from 'sweetalert';

 const casa = true;

const EliminarCita = ()  => {

const [citas, setCita]= useState({
 id:''
 });
    
 const {id} = citas;
    
    const onChange = (e) =>{
        setCita({
            ...citas,
            [e.target.name]: e.target.value
        });
    };
    
    useEffect(()=>{
        document.getElementById('Nombre').focus();
    },[])

    const CrearCuenta= async () =>{
      const verificarExistenciaUsuario = async (id) => {
        try {
          const response = await APIInvoke.invokeGET(
            `/citas?id=${id}`
          );
      
          if (response && response.length > 0) {
            return true; // la cita ya existe
          } else {
            return false; 
          }
        } catch (error) {
          console.error(error);
          return false; // Maneja el error si la solicitud falla
        }
      };

 if(casa === true) {
            const usuarioExistente = await verificarExistenciaUsuario();     
            const data = {
            id   // Hay que asegurarse que se envie bien al servidor
            };                                          
            const response = await APIInvoke.invokeDELETE(`/citas`, data);
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
                    const msg = "la cita fue borrada correctamente";
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
    
                    setCita({
                        doctor:'',
                        cita:'',
                        paciente:'',
                        fecha:'',
                        estado: 'pendiente'
    
                    })
                }
            }
        }

    const onSubmit = (e) =>{
        e.preventDefault()
        CrearCuenta();
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
            <p className="login-box-msg">Ingresa el id de la cita que vas a eliminar</p>
            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="id de cita " 
                id="Nombre"  
                name="id" 
                value={id} 
                onChange={onChange}
                required
                /><br></br>
                
              <button type="submit" to={"#"} className="btn btn-block btn-primary">
                 eliminar cita
              </button>
              <Link to={"/home"} className="btn btn-block btn-danger">
                 regresar a inicio 
              </Link>
            </div>
            </form>
          </div>
        </div>  
      </div>
      </div>
    )
    }
export default EliminarCita;