import React, { useReducer, useContext } from "react";
import tareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import usuarioContext from "../usuarios/usuarioContext";
import axios from "axios";

import {
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  ACTUALIZAR_TAREA,
  BOOL_ACTUALIZAR,
  OBTENER_TAREA_SELECCIONADA,
  OBTENER_CONTENIDO,
  ORDENAR_LISTA_FECHA,
  RECUPERAR_LISTA,
} from "../../types/index.js";

const TareaState = (props) => {
  const initialState = {
    listatareas: [],
    actualizar: false,
    tareaseleccionada: null,
    contenidobusqueda: "",
  };

  //useReducer
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  //Trayendo el usuario
  const { usuario } = useContext(usuarioContext);

  const { email } = usuario;

  //Funciones
  const agregarTarea = (tarea) => {
    axios
      .post("http://localhost:8080/tarea/add", tarea)
      .then((res) => {
        console.log(res); //Imprime 'data' con la creacion del id por parte de la BD
        dispatch({
          type: AGREGAR_TAREA,
          payload: tarea,
        });
        recuperarLista();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eliminarTarea = (tarea) => {
    axios
      .delete("http://localhost:8080/tarea/eliminate/" + tarea.idTarea)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    dispatch({
      type: ELIMINAR_TAREA,
      payload: tarea,
    });
  };

  const actualizarTarea = (tarea) => {
    axios
      .put("http://localhost:8080/tarea/update", tarea)
      .then((res) => {
        console.log(res);
        dispatch({
          type: ACTUALIZAR_TAREA,
          payload: tarea,
        });
        ordenarLista();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const modifActualizar = (bool) => {
    dispatch({
      type: BOOL_ACTUALIZAR,
      payload: bool,
    });
  };

  const obtenerTareaSeleccionada = (tarea) => {
    dispatch({
      type: OBTENER_TAREA_SELECCIONADA,
      payload: tarea,
    });
  };

  const guardarContenidoBusqueda = (contenido) => {
    dispatch({
      type: OBTENER_CONTENIDO,
      payload: contenido,
    });
  };

  const ordenarLista = () => {
    dispatch({
      type: ORDENAR_LISTA_FECHA,
    });
  };

  const recuperarLista = () => {
    /* const data = await fetch("http://localhost:8080/tarea/"+email);
    const tareas = await data.json();
    console.log("DATA: ", tareas); */

    axios
      .get("http://localhost:8080/tarea/" + email)
      .then((res) => {
        console.log(res);
        dispatch({
          type: RECUPERAR_LISTA,
          payload: res.data,
        });
        ordenarLista();
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("xd xxx");
  };

  return (
    <tareaContext.Provider
      value={{
        listatareas: state.listatareas,
        actualizar: state.actualizar,
        tareaseleccionada: state.tareaseleccionada,
        contenidobusqueda: state.contenidobusqueda,
        agregarTarea,
        eliminarTarea,
        actualizarTarea,
        modifActualizar,
        obtenerTareaSeleccionada,
        guardarContenidoBusqueda,
        ordenarLista,
        recuperarLista,
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
