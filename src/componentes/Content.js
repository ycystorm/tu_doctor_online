import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../utils/APIInvoke";
import swal from "sweetalert";

export default function ContentA() {

  const [citas, setcitas] = useState([]);
  const userId = localStorage.getItem("id");
  const cita = async () => {
    
    try {
      
      var response = await APIInvoke.invokeGET(`/citas?userId=${userId}`);
      console.log("Respuesta de la API:", response);

      if (Array.isArray(response) && response.length > 0) {
        setcitas(response);
      } else {
        console.error("La respuesta de la API no contiene citas.");
      }
    } catch (error) {
      console.error("Error al cargar las citas", error);
    }
  };

  useEffect(() => {
    cita();
  }, []);

  const eliminarProyecto = async (e, id) => {
    
    e.preventDefault();
    const verificarExistenciaproyecto = async (id) => {
      const userId = localStorage.getItem("id");
      try {
        const response = await APIInvoke.invokeGET(`/citas?id=${id}`);
        if (response && response.length > 0) {
          return true; // El usuario ya existe
        }
        return false; // El usuario no existe
      } catch (error) {
        console.error(error);
        return false; // Maneja el error si la solicitud falla
      }
    };

    const citaexistente = await verificarExistenciaproyecto(userId);

    if (citaexistente) {
      const response = await APIInvoke.invokeDELETE(`/citas/${userId}`);
      const msg = "cita eliminada correctamente";
      new swal({
        title: "Informacion",
        text: msg,
        icon: "success",
        buttons: {
          confirmar: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-prymari",
            closeModal: true,
          },
        },
      });
      cita();
    } else {
      const msg = "La categoria No Pudo Ser Eliminado";
      new swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirmar: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    }
  };

  return (
    <div classname="content-wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Tu Doctor Online</h1>
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
        </div>

        <section className="content" style={{ width: 2350 }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
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
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table m-0">
                        <thead>
                          <tr>
                            <th>id cita</th>
                            <th>nombre del doctor</th>
                            <th>tipo de cita</th>
                            <th>nombre del paciente</th>
                            <th>fecha de la cita</th>
                            <th>estado de la cita</th>
                            <th>operadores</th>
                          </tr>
                        </thead>
                        <tbody>
                          {citas.map((item) => (
                            <tr>
                              <td>{item.id}</td>
                              <td>{item.doctor}</td>
                              <td>{item.cita}</td>
                              <td>{item.paciente}</td>
                              <td>{item.fecha}</td>
                              <td>{item.estado}</td>
                              <td>
                                <Link
                                  onClick={(e) => eliminarProyecto(e, item.id)}
                                  className="btn btn-sm btn-info float-left"
                                >
                                  cancelar cita
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer clearfix">
                    <Link
                      to={"/CrearCita"}
                      className="btn btn-sm btn-secondary float-right"
                    >
                      agendar cita
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
