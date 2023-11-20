import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // componentes de ruteo
import Login from "./paginas/auth/login";
import CrearCuenta from "./paginas/auth/CrearCuenta";


function App() {


  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/Crear-Cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/index-usuario" exact element={<indexUsuario/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}


export default App;
