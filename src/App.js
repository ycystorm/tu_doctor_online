import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // componentes de ruteo
import Login from "./paginas/auth/login";
import CrearCuenta from "./paginas/auth/CrearCuenta";
import Home from "./paginas/home";
import CrearCuentaAD from "./paginas/auth/CrearCuentaA";
import Menu from "./paginas/menu";
import CrearCita from "./paginas/usuario/crearCita";
import EliminarCita from "./paginas/usuario/eliminarCita";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/Crear-Cuenta" exact element={<CrearCuenta />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/menuA" exact element={<Menu />} />
          <Route path="/cuantaA" exact element={<CrearCuentaAD />} />
          <Route path="/CrearCita" exact element={<CrearCita/>} />
          <Route path="/EliminarCuenta" exact element={<EliminarCita/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
