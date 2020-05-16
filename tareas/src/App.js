import React from "react";
import Principal from "./components/layout/Principal";

//Trayendo el stateTarea para compartir los values a
//los componentes que estén dentro de él
import TareaState from "../src/context/tareas/tareaState";

function App() {
  return (
    <TareaState>
      <Principal></Principal>
    </TareaState>
  );
}

export default App;
