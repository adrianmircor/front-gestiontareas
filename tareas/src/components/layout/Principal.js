import React from "react";
import "../../index.css";
import Aside from '../layout/Aside'
import Tablero from '../layout/Tablero'


const Principal = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 formu columna">
          <Aside></Aside>
        </div>
        <div className="col-md-9 tabler columna">
          <Tablero></Tablero>
        </div>
      </div>
    </div>
  );
};

export default Principal;
