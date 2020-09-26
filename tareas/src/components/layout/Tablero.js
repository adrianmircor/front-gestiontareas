import React, { Fragment, useContext } from "react";

import ListaTarea from "../funcionales/tareas/ListaTarea";

import BuscadorTarea from "../funcionales/tareas/BuscadorTarea";

import tareaContext from "../../context/tareas/tareaContext";
import styled from 'styled-components';

const Parrafo = styled.p`
  font-family: 'Lobster', cursive;
  font-size: 20px;

`;
const Span = styled.span`
  color: white;
  font-size: 20px;

`;

const Tablero = () => {
  const { listatareas } = useContext(tareaContext);

  return (
    <Fragment>
      <div className="row mt-3">
        <div className="col-4 ">
          <div className="d-flex justify-content-start">
            <Parrafo className="longitud">
              Tareas: <Span>{listatareas.length}</Span>
            </Parrafo>
          </div>
        </div>
        <div className="col-8">
          <div className="d-flex justify-content-end m-0">
            <BuscadorTarea></BuscadorTarea>
          </div>
        </div>
      </div>

      <div className="row">
        <ListaTarea></ListaTarea>
      </div>
    </Fragment>
  );
};

export default Tablero;
