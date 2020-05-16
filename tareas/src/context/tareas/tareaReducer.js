import {
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  ACTUALIZAR_TAREA,
  BOOL_ACTUALIZAR,
  OBTENER_TAREA_SELECCIONADA,
  OBTENER_CONTENIDO,
  ORDENAR_LISTA_FECHA,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case AGREGAR_TAREA:
      return {
        ...state,
        listatareas: [...state.listatareas, action.payload],
      };
    case ELIMINAR_TAREA:
      return {
        ...state,
        listatareas: state.listatareas.filter(
          (tarea) => tarea.id !== action.payload.id
        ),
      };
    case ACTUALIZAR_TAREA:
      return {
        ...state,
        listatareas: state.listatareas.map((tarea) => {
          if (tarea.id === action.payload.id) {
            return action.payload;
          }
          return tarea;
        }),
      };
    case BOOL_ACTUALIZAR:
      return {
        ...state,
        actualizar: action.payload,
      };
    case OBTENER_TAREA_SELECCIONADA:
      return {
        ...state,
        tareaseleccionada: state.listatareas.filter((tarea) => {
          if (tarea.id === action.payload.id) {
            return action.payload;
          }
          return null;
        }),
        /*NOTA!!!
        EL USO DE .filter GENERA UN NUEVO ARRAY */
      };
    case OBTENER_CONTENIDO:
      return {
        ...state,
        contenidobusqueda: action.payload,
      };

    case ORDENAR_LISTA_FECHA:
      return {
        ...state,
        listatareas: state.listatareas.sort( (a,b) => new Date(a.fechatarea) - new Date(b.fechatarea))
      };
    default:
      return state;
  }
};
