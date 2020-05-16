import React, { useState, useContext, useEffect } from "react";

//Importanto el Context, que es quien comparte state y funciones a los de+
import tareaContext from "../../../context/tareas/tareaContext";

import uuid from "uuid";

const FormTarea = () => {
  const [tarea, guardarTarea] = useState({
    nombre: "",
    responsable: "",
    fechatarea: "",
    prioridad: "",
  });

  const [ error, modificarError ] = useState(false);
  
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };
  
  const {
    actualizar,
    tareaseleccionada,
    agregarTarea,
    modifActualizar,
    actualizarTarea,
  } = useContext(tareaContext);

  useEffect(() => {
    if (actualizar) {
      
      guardarTarea(tareaseleccionada[0]); //Ya que es un array, porque se usa filter
    } 
  }, [tareaseleccionada,actualizar]);
  
  const { nombre, responsable, fechatarea, prioridad } = tarea;
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || responsable === "" || fechatarea === "" || prioridad === "") {
      modificarError(true);
      return;
    }

    modificarError(false);

    if(!actualizar){
      //Se agrega id
      tarea.id = uuid.v4();
      //Usar el Context de Tarea para agregar a la lista de tareas
      agregarTarea(tarea);
    }else{
      actualizarTarea(tarea)
    }

    guardarTarea({
      nombre: "",
      responsable: "",
      fechatarea: "",
      prioridad: "",
    });
  };

  const handleMostrarForm = (e) => {
    if (actualizar === true) {
      guardarTarea({
        nombre: "",
        responsable: "",
        fechatarea: "",
        prioridad: "",
      });
      modifActualizar(false);
    }
  };

  return (
    <div>
      <h3 className="titulo">MI TAREA</h3>

      {error ? (
        <div className="d-flex justify-content-center">
          <div className="alert alert-danger " role="alert">
            Todos los campos deben estar llenos
          </div>
        </div>
      ) : null}

      <div className="d-flex justify-content-center">
        <button className="botonimagen" onClick={() => handleMostrarForm()}>
          <img
            className="imagenanadir"
            src="/img/icono-anadir.png"
            alt="Icono para agregar"
          ></img>
        </button>
      </div>

      {(actualizar ) ? (
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center">
            <input
              className="inp-actualizar form-group"
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={nombre} 
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              className="form-group inp-actualizar "
              type="text"
              placeholder="Responsable"
              name="responsable"
              value={responsable}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              className="form-group inp-actualizar "
              type="Date"
              name="fechatarea"
              value={fechatarea}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <select
              name="prioridad"
              className="priori-actualizar"
              value={prioridad}
              onChange={handleChange}
            >
              <option value="">Elegir Prioridad</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-success">
              Actualizar
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center">
            <input
              className="inp form-group"
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={nombre}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              className="form-group inp "
              type="text"
              placeholder="Responsable"
              name="responsable"
              value={responsable}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              className="form-group inp "
              type="Date"
              name="fechatarea"
              value={fechatarea}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <select
              name="prioridad"
              className="priori"
              value={prioridad}
              onChange={handleChange}
            >
              <option value="">Elegir Prioridad</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btnAnadir btn-primary">
              Añadir
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormTarea;
