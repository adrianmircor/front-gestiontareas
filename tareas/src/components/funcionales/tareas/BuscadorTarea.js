import React, { useContext, Fragment } from "react";

//Importanto el Context, que es quien comparte state y funciones a los de+
import tareaContext from "../../../context/tareas/tareaContext";

import styled from "styled-components";

const Lupa = styled.i``;

const Input = styled.input`
  display: inline-block;
  width: 80%;
`;

const BuscadorTarea = () => {
  const { guardarContenidoBusqueda } = useContext(tareaContext);

  const handleChange = (e) => {
    guardarContenidoBusqueda(e.target.value);
  };

  //console.log("--- "+contenidobusqueda.buscador)

  return (
    <Fragment>
      <div className="row">
        <Input
          className="form-control form-control-sm mr-1"
          type="text"
          placeholder="Nombre de la Tarea..."
          aria-label="Search"
          name="buscador"
          onChange={handleChange}
        />
        <div className="align-self-center ">
          <Lupa className="fas fa-lg fa-search" aria-hidden="true"></Lupa>
        </div>
      </div>
    </Fragment>
  );
};

export default BuscadorTarea;
