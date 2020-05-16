import React, { useContext, useEffect } from "react";
import Tarea from "../tareas/Tarea";

//Importanto el Context, que es quien comparte state y funciones a los de+
import tareaContext from "../../../context/tareas/tareaContext";

const ListaTarea = () => {
  const { listatareas, contenidobusqueda,
          ordenarLista } = useContext(tareaContext);

  useEffect(() =>{
    ordenarLista()
    //console.log(listatareas)
  },[listatareas])

  if (!listatareas) return "nada";

  return (
    <div className="container pl-4 col-md">
      <div className="row pl-5 col-md">
        {listatareas.map((tarea) => {
          if (tarea.nombre.toUpperCase().search(contenidobusqueda.toUpperCase()) > -1) {
            return <Tarea 
                      key={tarea.id} 
                      tarea={tarea}></Tarea>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ListaTarea;
