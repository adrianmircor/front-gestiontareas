import React, { Fragment, useContext } from "react";

import ListaTarea from "../funcionales/tareas/ListaTarea";

import BuscadorTarea from "../funcionales/tareas/BuscadorTarea";

import tareaContext from "../../context/tareas/tareaContext";

const Tablero = () => {
  const { listatareas } = useContext(tareaContext);

  return (
    <Fragment>
      <div className="">
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex justify-content-start">
              <p className="longitud">
                Tareas: <span>{listatareas.length}</span>
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-end">
              <BuscadorTarea></BuscadorTarea>
            </div>
          </div>
        </div>

        <div className="row">
          <ListaTarea></ListaTarea>
        </div>
      </div>
    </Fragment>
  );
};

export default Tablero;
