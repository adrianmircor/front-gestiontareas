import React, { useContext, useEffect } from "react";
import Tarea from "../tareas/Tarea";

//Importanto el Context, que es quien comparte state y funciones a los de+
import tareaContext from "../../../context/tareas/tareaContext";

const ListaTarea = () => {
  const {
    listatareas,
    contenidobusqueda,
    recuperarLista,
  } = useContext(tareaContext);

  useEffect(() => {
    recuperarLista();
    console.log("lista de tareas: ",listatareas);
    // eslint-disable-next-line
  }, []);
  
  if (listatareas.length === 0) return "nada";
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
