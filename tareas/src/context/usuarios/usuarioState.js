import React, {useReducer} from "react";
import usuarioContext from "./usuarioContext";
import usuarioReducer from "./usuarioReducer";

import { ASIGNAR_USUARIO } from "../../types/index.js";

const UsuarioState = (props) => {
  const initialState = {
    usuario: {
        email:"",
        contrasena:""
    },
  };

  //useReducer
  const [state, dispatch] = useReducer(usuarioReducer, initialState);

  const asignarUsuario = (usuario) => {

    dispatch({
        type: ASIGNAR_USUARIO,
        payload: usuario
    })
  }


  return (
    <usuarioContext.Provider
      value={{
        usuario: state.usuario,
        asignarUsuario
      }}
    >
      {props.children}
    </usuarioContext.Provider>
  );
};

export default UsuarioState;
