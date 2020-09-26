import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Principal from "./components/layout/Principal";
import Registro from "./components/layout/Registro";
import Login from "./components/layout/Login";

//Trayendo el stateTarea para compartir los values a
//los componentes que estén dentro de él
import TareaState from "../src/context/tareas/tareaState";
import UsuarioState from "../src/context/usuarios/usuarioState";

function App() {
  return (
    <BrowserRouter>

      <UsuarioState>
        <Route exact path="/" component={Login} />
        <Route exact path="/tareas">
          <TareaState>
            <Principal></Principal>
          </TareaState>
        </Route>
      </UsuarioState>

      <Route exact path="/registro" component={Registro} />
      
    </BrowserRouter>
  );
}

export default App;
/*
 

<TareaState>
      <Principal></Principal>
    </TareaState>

*/
