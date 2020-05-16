import React, { useReducer } from "react";
import tareaContext from "./tareaContext"
import tareaReducer from "./tareaReducer";


import { 
    AGREGAR_TAREA,
    ELIMINAR_TAREA,
    ACTUALIZAR_TAREA,
    BOOL_ACTUALIZAR,
    OBTENER_TAREA_SELECCIONADA,
    OBTENER_CONTENIDO,
    ORDENAR_LISTA_FECHA
} from "../../types/index.js";

const TareaState = (props) => {
  const initialState = {
    listatareas: [
      {id:1,nombre:"Agregar Tarea",responsable:"Carlo",fechatarea:"2020-06-11",prioridad:"Media"},
      {id:2,nombre:"Generar Reporte",responsable:"Kenny ",fechatarea:"2020-12-31",prioridad:"Alta"},
      {id:3,nombre:"Estudiar",responsable:"Silvia",fechatarea:"2020-11-30",prioridad:"Alta"},
      {id:5,nombre:"Leer",responsable:"Jaime",fechatarea:"2020-08-31",prioridad:"Alta"},
      {id:4,nombre:"Cocinar",responsable:"Keyla",fechatarea:"2020-07-31",prioridad:"Alta"},
      {id:6,nombre:"Bailar",responsable:"Fanny",fechatarea:"2020-09-30",prioridad:"Alta"},
      {id:7,nombre:"Comer",responsable:"Sunny",fechatarea:"2020-09-30",prioridad:"Alta"},
    ],
    actualizar: false,
    tareaseleccionada: null,
    contenidobusqueda: ""
  };

  //useReducer
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  //Funciones
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  const eliminarTarea = (tarea) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: tarea,
    })
  }

  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea
    })
  }

  const modifActualizar = (bool) => {
    dispatch({
      type: BOOL_ACTUALIZAR,
      payload: bool
    })
  }

  const obtenerTareaSeleccionada = (tarea) => {
    dispatch({
      type: OBTENER_TAREA_SELECCIONADA,
      payload: tarea
    })
  }

  const guardarContenidoBusqueda = (contenido) => {
    dispatch({
      type: OBTENER_CONTENIDO,
      payload: contenido
    })
  }

  const ordenarLista = () => {
    dispatch({
      type: ORDENAR_LISTA_FECHA,
    })
  }

  return (
    <tareaContext.Provider
      value={{
        listatareas: state.listatareas,
        actualizar: state.actualizar,
        tareaseleccionada: state.tareaseleccionada,
        contenidobusqueda:state.contenidobusqueda,
        agregarTarea,
        eliminarTarea,
        actualizarTarea,
        modifActualizar,
        obtenerTareaSeleccionada,
        guardarContenidoBusqueda,
        ordenarLista
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
