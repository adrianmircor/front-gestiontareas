import React, { useState, useContext } from "react";

import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import usuarioContext from "../../../context/usuarios/usuarioContext";
import ModalLogin from "../../layout/ModalLogin.js";

import axios from "axios";

import styled, { css } from "styled-components";

const fuente = css`
  font-family: "Nova Mono", monospace;
  font-weight: bold;
`;
const H3 = styled.h3`
  color: rgba(56, 60, 219, 1);
  ${fuente}
  font-size: 35px;
  margin-top: 23px;
  margin-bottom: 40px;
`;

const Label = styled.label`
  color: rgba(56, 60, 219, 1);
  font-size: 20px;
  ${fuente}
`;

const Boton = styled.button`
  color: rgb(255, 255, 255);
  border-color: rgba(56, 60, 219, 1);
  background-color: rgba(56, 60, 219, 1);
  padding: 5px;
  margin: 0;
  margin-top: 10px;
  border-radius: 8px;
  font-size: 25px;
  ${fuente}
`;

const A = styled.p`
  ${fuente}
  color: rgba(56, 60, 219, 1);
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DivA = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FormLogin = () => {
  /* const [bandera, setBandera] = useState(false);
    if(bandera){
        return <Redirect from="/" to="/tareas" />
    } 
  */

  //const history = useHistory();

  const { asignarUsuario } = useContext(usuarioContext);

  const [usuario, setUsuario] = useState({
    email: "",
    contrasena: "",
  });
  const [modalShow, setModalShow] = useState(false);
  const [existeusuario, setExisteUsuario] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    console.log("-> ", usuario);
  };

  const { email, contrasena } = usuario;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    //setBandera(true);
    console.log("usuario-> ", usuario);
    console.log("email-> ", email);
    console.log("contrasena-> ", contrasena);

    if (email === "" || contrasena === "") {
      setModalShow(true);
      setExisteUsuario(false);
      setMensaje("DEBE LLENAR LOS CAMPOS")
      return ;
    }


    axios
      .get(
        "http://localhost:8080/usuario/encontrar/" + email + "/" + contrasena
      )
      .then((res) => {
        console.log(res);
        if (email === res.data.email && contrasena === res.data.contrasena) {
          console.log(
            "EXISTE EL USUARIO: " + res.data.email + " / " + res.data.contrasena
          );
          //context para usuario
          asignarUsuario(usuario);
          setModalShow(true);
          setExisteUsuario(true);
          /* if (modalShow == false) {
            console.log("valor de modalshow: ", modalShow);
            history.push("/tareas");
          } */
        } else {
          console.log("NO HAY VALOR");
          setModalShow(true);
          setExisteUsuario(false);
          setMensaje("ESTA CUENTA NO ESTÁ REGISTRADA");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cerrarModal = () => {
    setModalShow(false);
    console.log("> cerrarModal", modalShow);
  };

  if (!modalShow && existeusuario) {
    //history.push("/tareas");
    return <Redirect to="/tareas" />
  }

  return (
    <div className="col-md-12">
      <form onSubmit={handleSubmit}>
        <H3 className="text-center">INICIO DE SESIÓN</H3>
        <div className="form-group">
          <Label htmlFor="email">E-mail:</Label>
          <br />
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Label htmlFor="password">Contraseña:</Label>
          <br />
          <input
            type="password"
            name="contrasena"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-center">
          <Boton type="submit">ENTRAR</Boton>
        </div>
        <DivA className="text-right">
          <A>
            <Link to="/registro">Registrarse</Link>
          </A>
        </DivA>
      </form>

      <ModalLogin
        show={modalShow}
        onHide={() => cerrarModal(false)}
        encontrado={existeusuario}
        mensaje={mensaje}
      />
    </div>
  );
};

export default FormLogin;
