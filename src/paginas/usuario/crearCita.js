import React, { useState, useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

//import swal  from 'sweetalert';

const casa = true;

const CrearCita = () => {
  const [citas, setCita] = useState({
    doctor: "",
    cita: "",
    paciente: "",
    fecha: "",
    estado: "pendiente",
  });

  const { doctor, cita, paciente, fecha } = citas;

  const onChange = (e) => {
    setCita({
      ...citas,
      [e.target.name]: e.target.value,
    });
    const fechaIngresada = new Date(e.target.value);
    const fechaActual = new Date();
  
    if (fechaIngresada < fechaActual) {
      // Display an alert message
      alert("La fecha seleccionada no puede ser anterior a la fecha actual.");
  
      // Reset the input value to empty
      e.target.value = "";
    } 
  };

  useEffect(() => {
    document.getElementById("Nombre").focus();
  }, []);

  const CrearCuenta = async () => {
    const verificarExistenciaUsuario = async (
      doctor,
      cita,
      paciente,
      fecha,
      estado
    ) => {
      try {
        const response = await APIInvoke.invokeGET(
          `/citas?doctor=${doctor}&cita=${cita}&paciente${paciente}&fecha${fecha}&estado${estado}`
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

    if (casa === true) {
      const usuarioExistente = await verificarExistenciaUsuario();
      const data = {
        doctor: citas.doctor,
        cita: citas.cita,
        paciente: citas.paciente,
        fecha: citas.fecha,
        estado: citas.estado, // Hay que asegurarse que se envie bien al servidor
      };
      const response = await APIInvoke.invokePOST(`/citas`, data);
      const mensaje = response.msg;

      if (usuarioExistente) {
        const msg = "El usuario ya existe";
        new swal({
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
      } else {
        const msg = "la cita fue creada correctamente";
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
            },
          },
        });

        setCita({
          doctor: "",
          cita: "",
          paciente: "",
          fecha: "",
          estado: "pendiente",
        });
      }
    }
  };

 

  const onSubmit = (e) => {
    e.preventDefault();
    CrearCuenta();
  };

  return (
    <div class="hold-transition login-page" style={{ backgroundColor:"#e2e2e2"}}>
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
            <b>Crear</b> Cuenta
          </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Ingresa los datos de la cita</p>
            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
              <select
                  className="form-control"
                  placeholder="Nombre del doctor"
                  id="Nombre"
                  name="doctor"
                  value={doctor}
                  onChange={onChange}
                  required
                >
                  <option >escoje tu doctor preferido</option>
                  <option >Juan García</option>
                  <option >Miguel Gómez</option>
                  <option >Roberto López</option>
                  <option >Ricardo Sánchez</option>
                  <option >David Martínez</option>
                </select>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <select
                  name="cita"
                  className="form-control"
                  placeholder="tipo de cita"
                  value={cita}
                  onChange={onChange}
                  required
                >
                  <option >escoje una cita</option>
                  <option >médicas general</option>
                  <option >citas con especialista</option>
                  <option >citas de psicología</option>
                  <option >citas de nutrición</option>
                  <option >citas de fisioterapia</option>
                </select>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="nombre y apellidos del usuario"
                  id="password"
                  name="paciente"
                  value={paciente}
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
                <input
                  type="date"
                  className="form-control"
                  placeholder="fecha para la cita "
                  id="password2"
                  name="fecha"
                  value={fecha}
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
                <button type="submit" className="btn btn-block btn-primary">
                  crear cita
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
  );
};
export default CrearCita;
