import React from "react";
import RegistroUsuario from "../funcionales/usuarios/RegistroUsuario.js"
import styled from "styled-components";


const Div = styled.div`
  background-color: black;
  min-height: 100vh;
  width: 100%;
  background-image: url("https://payload.cargocollective.com/1/23/742156/13538738/Google-tasks-02_750.png");
  background-repeat: no-repeat center center fixed;
  background-size: 100% 100%;
  margin:0;
`;

const CardDiv = styled.div`
  border-color: rgba(56, 60, 219, 1);
  border-style: solid;
  border-width: 6px;
  border-radius: 30px;
  backdrop-filter: blur(4px);
`;

console.log("hey")
const Registro = () => {

  return (
    <Div className="row justify-content-center">
      <CardDiv className="col-lg-4 col-md-5 col-sm-6 col-10 align-self-center">
          <RegistroUsuario></RegistroUsuario>
      </CardDiv>
    </Div>
  );
};

export default Registro;
