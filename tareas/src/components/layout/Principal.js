import React from "react";
import "../../index.css";
import Aside from '../layout/Aside'
import Tablero from '../layout/Tablero'

import styled from 'styled-components';

const Div = styled.div`
  min-height: 100vh;

`;

const Principal = () => {
  return (
    <div className="container-fluid">
      <Div className="row">
        <div className="col-12 col-sm-12 col-md-3 formu columna">
          <Aside></Aside>
        </div>
        <div className="col-12 col-sm-12 col-md-9 tabler columna">
          <Tablero></Tablero>
        </div>
      </Div>
    </div>
  );
};

export default Principal;
