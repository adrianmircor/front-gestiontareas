import {
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  ACTUALIZAR_TAREA,
  BOOL_ACTUALIZAR,
  OBTENER_TAREA_SELECCIONADA,
  OBTENER_CONTENIDO,
  ORDENAR_LISTA_FECHA,
  RECUPERAR_LISTA
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case AGREGAR_TAREA:
      return {
        ...state,
        listatareas: [...state.listatareas, action.payload],
      };
    case ELIMINAR_TAREA:
      //action.payload.idTarea es la 'tarea' q se envia y éste tiene como atributo idTarea
      return {
        ...state,
        listatareas: state.listatareas.filter(
          (tarea) => tarea.idTarea !== action.payload.idTarea
        ),
      };
    case ACTUALIZAR_TAREA:
      return {
        ...state,
        listatareas: state.listatareas.map((tarea) => {
          if (tarea.idTarea === action.payload.idTarea) {
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
          if (tarea.idTarea === action.payload.idTarea) {
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
        listatareas: state.listatareas.sort(
          (a, b) =>  new Date(a.fecha) - new Date(b.fecha)
        ),
      };
    case RECUPERAR_LISTA:
      //Array listatareas será = al array de JSON que viene por GET 
      return {
        ...state,
        listatareas: action.payload,
      };
    default:
      return state;
  }
};
