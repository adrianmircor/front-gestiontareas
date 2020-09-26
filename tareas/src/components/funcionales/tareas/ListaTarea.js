import React, { useContext, useEffect } from "react";
import Tarea from "../tareas/Tarea";
import { Redirect } from "react-router-dom";

//Importanto el Context, que es quien comparte state y funciones a los de+
import tareaContext from "../../../context/tareas/tareaContext";

import usuarioContext from "../../../context/usuarios/usuarioContext";



//importart context de usuario y comprobar que tenga valor para que renderice 
//la lista de tareas


const ListaTarea = () => {

  const {
    usuario
  } = useContext(usuarioContext);

  const {
    listatareas,
    contenidobusqueda,
    recuperarLista,
  } = useContext(tareaContext);

  useEffect(() => {
    if(usuario.email !== ""){

      recuperarLista();
    }
    console.log("lista de tareas: ",listatareas);
    console.log("usuario: ",usuario);

    // eslint-disable-next-line
  }, []);

  if (usuario.email === "") {
    //history.push("/tareas");
    return <Redirect to="/" />
  }
  
  if (listatareas.length === 0) return "";
  //console.log("->> DATA CONVERITDA EN ARRAY", listatareas);
  
  return (
    
    <div className="container m-0">
      <div className="row p-0 m-0 ">
        {listatareas.map((tarea,i) => {
          if (
            tarea.nombre.toUpperCase().search(contenidobusqueda.toUpperCase()) >
            -1
          ) {
            return <Tarea key={i} tarea={tarea}></Tarea>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ListaTarea;
