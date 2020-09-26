import { ASIGNAR_USUARIO } from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case ASIGNAR_USUARIO:
      return {
        ...state,
        usuario: action.payload,
      };

    default:
      return state;
  }
};
