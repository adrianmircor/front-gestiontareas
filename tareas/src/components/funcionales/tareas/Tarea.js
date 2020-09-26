import React, { useContext } from "react";

import tareaContext from "../../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  const {
    eliminarTarea,
    modifActualizar,
    obtenerTareaSeleccionada,
  } = useContext(tareaContext);

  /* useEffect(() => {
    recuperarLista();
  }, [!tarea]); */

  const onClickElim = () => {
    eliminarTarea(tarea);
  };

  const onClickActualizar = (e) => {
    e.preventDefault();
    //bandera = true;
    console.log("ESTA ES LA TAREA SELECCIONADA CON CLICK: ", tarea);
    //console.log("ID: ", tarea.idTarea);
    //console.log("NOMBRE: ", tarea.nombre);
    obtenerTareaSeleccionada(tarea); //Se le asigna valor a 'tareaseleccionada'
    modifActualizar(true);
  };

  const formatearFecha = (fecha) => {
    return fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, "$3/$2/$1");
  };

  /* const formatearFecha2 = (fecha) => {
    return formatearFecha(fecha.slice(0, 10));
  }; */

  //Se recuperara los valores igual que el objeto json
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card text-white bg-dark center p-0 ml-2 mr-2 m-4">
        <div className="card-body text-center">
          <h5 className="card-title">{tarea.nombre}</h5>
          <p className="card-text">Responsable: {tarea.responsable}</p>
          <p className="card-text">Fecha: {formatearFecha(tarea.fecha)}</p>
          <p className="card-text">Prioridad: {tarea.prioridad}</p>
        </div>
        <button className="btnElim" onClick={() => onClickElim()}>
          X
        </button>
        <button className="btnActual" onClick={(e) => onClickActualizar(e)}>
          Actualizar
        </button>
      </div>
    </div>
  );
};

export default Tarea;
