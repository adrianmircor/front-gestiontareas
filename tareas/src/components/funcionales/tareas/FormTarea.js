import React, { useState, useContext, useEffect } from "react";

//Importanto el Context, que es quien comparte state y funciones a los de+
import tareaContext from "../../../context/tareas/tareaContext";
import usuarioContext from "../../../context/usuarios/usuarioContext";

import { Link } from "react-router-dom";

import styled from "styled-components";

const CerrarSesion = styled.p`
  color: rgba(57, 232, 245, 96);
  font-size: 10px;
`;

const FormTarea = () => {
  const {
    actualizar,
    tareaseleccionada,
    agregarTarea,
    modifActualizar,
    actualizarTarea,
  } = useContext(tareaContext);

  const { usuario } = useContext(usuarioContext);

  const [tarea, guardarTarea] = useState({
    //Se tiene que enviar todo el objeto usuario, ya que en el back end dentro de la clase 'Tarea' existe el campo 'Usuario' que tiene 2 atributos (email y contrasena)
    usuario,
    idTarea: "", //el valor lo proporciona la BD
    nombre: "", //se obtienen del formulario:
    responsable: "",
    fecha: "",
    prioridad: "",
  });

  const [error, modificarError] = useState(false);

  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (actualizar) {
      //Se le asigna al useState de 'tarea' el valor de 'tareseleccionada[0]'
      guardarTarea(tareaseleccionada[0]); //Ya que es un array, porque se usa filter
      console.log("tarea seleccionada : ", tareaseleccionada[0]);
    }
  }, [tareaseleccionada, actualizar]);

  const { nombre, responsable, fecha, prioridad } = tarea;
  const { email } = usuario;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre === "" ||
      responsable === "" ||
      fecha === "" ||
      prioridad === ""
    ) {
      modificarError(true);
      return;
    }

    modificarError(false);

    if (!actualizar) {
      //Usar el Context de Tarea para agregar a la lista de tareas
      agregarTarea(tarea);
      console.log("tarea que se envio -> ", tarea);
    } else {
      //tarea.idTarea = tareaupdate.idTarea; no llega el id
      actualizarTarea(tarea); //tarea contiene los valores de tareaseleccionada[0]
      modifActualizar(false);
    }

    guardarTarea({
      usuario,
      nombre: "",
      responsable: "",
      fecha: "",
      prioridad: "",
    });
  };

  const handleMostrarForm = (e) => {
    if (actualizar === true) {
      guardarTarea({
        usuario,
        nombre: "",
        responsable: "",
        fecha: "",
        prioridad: "",
      });
      modifActualizar(false);
    }
  };

  return (
    <div>
      <div className="pt-2 d-flex justify-content-end">
        <p className="text-white m-0">Hola {email}</p>
      </div>
      <div className="d-flex justify-content-end">
        <Link to="/">
          <CerrarSesion>Cerrar sesión</CerrarSesion>
        </Link>
      </div>
        <p className="titulo">Gestión de Tareas</p>

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
      {actualizar ? (
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center">
            <input
              className="inp-actualizar form-group"
              type="text"
              placeholder="Nombre de Tarea"
              name="nombre"
              value={nombre}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              className="form-group inp-actualizar "
              type="text"
              placeholder="Responsable de Tarea"
              name="responsable"
              value={responsable}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              className="form-group inp-actualizar "
              type="Date"
              name="fecha"
              value={fecha}
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
              placeholder="Nombre de Tarea"
              name="nombre"
              value={nombre}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              className="form-group inp "
              type="text"
              placeholder="Responsable de Tarea"
              name="responsable"
              value={responsable}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              className="form-group inp "
              type="Date"
              name="fecha"
              value={fecha}
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
