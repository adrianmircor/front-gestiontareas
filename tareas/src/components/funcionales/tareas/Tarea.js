import React, { useContext } from "react";

import tareaContext from "../../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  const { eliminarTarea, 
          modifActualizar, obtenerTareaSeleccionada } = useContext(
    tareaContext
  );

  const onClickElim = () => {
    eliminarTarea(tarea);
  };

  const onClickActualizar = () => {
    obtenerTareaSeleccionada(tarea);
    modifActualizar(true);
  };

  const formatearFecha = (fecha) => {
    return fecha.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
  }

  return (
    <div className="tajeta col-3 card text-white bg-dark m-4">
      <div className="card-body">
        <h5 className="card-title">{tarea.nombre}</h5>
        <p className="card-text">Responsable: {tarea.responsable}</p>
        <p className="card-text">Fecha: {formatearFecha(tarea.fechatarea)}</p>
        <p className="card-text">Prioridad: {tarea.prioridad}</p>
      </div>
      <button className="btnElim" onClick={() => onClickElim()}>
        X
      </button>
      <button className="btnActual" onClick={() => onClickActualizar()}>
        Actualizar
      </button>
    </div>
  );
};

export default Tarea;
