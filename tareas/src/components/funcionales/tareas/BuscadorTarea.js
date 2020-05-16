import React, { useContext, Fragment } from "react";

//Importanto el Context, que es quien comparte state y funciones a los de+
import tareaContext from "../../../context/tareas/tareaContext";

const BuscadorTarea = () => {
  const { guardarContenidoBusqueda } = useContext(tareaContext);

  const handleChange = (e) => {
    guardarContenidoBusqueda(e.target.value);
  };

  //console.log("--- "+contenidobusqueda.buscador)

  return (
    <Fragment>
      <form className="form-inline busqueda">
        <input
          className="form-control form-control-sm mr-3 w-105"
          type="text"
          placeholder="Nombre de la Tarea..."
          aria-label="Search"
          name="buscador"
          onChange={handleChange}
        />
        <i className="fas fa-search" aria-hidden="true"></i>
      </form>
    </Fragment>
  );
};

export default BuscadorTarea;
