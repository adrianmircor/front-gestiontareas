import React from "react";

import { Modal } from "react-bootstrap";
import styled from "styled-components";

const H3 = styled.h3`
  text-align: center;
  height: min-content;
`;

const Div = styled.div`
  width: 100%;
  margin: 0px;
`;

const Container = styled.div`
  margin-left: 1.7rem;
`;

const ModalLogin = (props) => {
  const { show, onHide, encontrado, mensaje } = props;

  const fueCerrado = () => {
    console.log("Fue cerrado");
    console.log("show", show);
  };

  return (
    <Modal
      //{...props}
      show={show}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onClick={() => fueCerrado(false)}
      animation={false} //No genera: Sugerencia: Buscar solo resultados en español. Puedes especificar el idioma de búsqueda en Preferencias.Warning: findDOMNode is deprecated in StrictMode
    >
      <Modal.Header closeButton>
        {/*AGREGAR VAS BIEN */}
        <Container className="container pr-0 ">
          {encontrado ? (
            <Div className="row pt-3 d-flex justify-content-center">
              <i className="far fa-smile-beam fa-10x"></i>
              <Div className="row pt-3 d-flex justify-content-center">
                <H3 className="msje">
                  ¡ BIENVENIDO<span> ... </span> !
                </H3>
              </Div>
            </Div>
          ) : (
            <Div className="row pt-3 d-flex justify-content-center">
              <i className="far fa-frown-open fa-10x"></i>
              <Div className="row pt-3 d-flex justify-content-center">
                <H3 className="msje">{mensaje}</H3>
              </Div>
            </Div>
          )}
        </Container>
      </Modal.Header>
    </Modal>
  );
};

export default ModalLogin;
