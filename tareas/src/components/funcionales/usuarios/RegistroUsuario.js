import React, { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

import styled, { css } from "styled-components";
import ModalRegister from "../../layout/ModalRegister.js";

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

const RegistroUsuario = () => {
  const [usuario, registrarUsuario] = useState({
    email:"",
    contrasena:"",
    contrasena2:""
  });
  const [modalShow, setModalShow] = useState(false);
  const [caritatriste, setCaritaTriste] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    console.log("usuario-> ",usuario)
    registrarUsuario({
      ...usuario,
      //Si hay 'names' que no estan en el objeto, se le añaden como atributos de 'usuario'
      [e.target.name]: e.target.value,
    });
  };

  const { email, contrasena, contrasena2 } = usuario;

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validarCampos()){
      return ;
    };    

    if (contrasena === contrasena2) {
      //Comprobar si existe ese usuario en la bd
      console.log("Entró")
      axios
        .get("http://localhost:8080/usuario/validar/" + email)
        .then((res) => {
          console.log(res);
          if (res.data.email === email) {
            setModalShow(true);
            setCaritaTriste(true);
            setMensaje("ESE EMAIL EXISTE, PRUEBE CON OTRO");
          } else {
            axios
              .post("http://localhost:8080/usuario/add", usuario)
              .then((res) => {
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
              setModalShow(true);
              setCaritaTriste(false);
              setMensaje("¡ CUENTA REGISTRADA !");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {            
      setModalShow(true);
      setCaritaTriste(true);
      setMensaje("CONTRASEÑAS DIFERENTES");
    }
  };

  const validarCampos = () => {
    if(email === "" || contrasena === "" || contrasena2 === ""){
      setModalShow(true);
      setCaritaTriste(true);
      setMensaje("NO DEBE HABER CAMPOS VACÍOS"); 
      console.log("NO DEBE HABER CAMPOS VACÍOS")
      return false;
    }
    return true;
  }

  const cerrarModal = () => {
    setModalShow(false);
  };

  return (
    <div className="col-md-12">
      <form onSubmit={handleSubmit}>
        <H3 className="text-center">¡REGÍSTRATE!</H3>
        <div className="form-group">
          <Label htmlFor="email">Ingrese su E-mail:</Label>
          <br />
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Label htmlFor="password">Ingrese su Contraseña:</Label>
          <br />
          <input
            type="password"
            name="contrasena"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <Label htmlFor="password">Ingrese de nuevo su Contraseña:</Label>
          <br />
          <input
            type="password"
            name="contrasena2"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-center">
          <Boton type="submit" className="btn ">
            REGISTRARME
          </Boton>
        </div>
        <DivA className="text-right">
          <A>
            <Link to="/">Iniciar sesión</Link>
          </A>
        </DivA>
      </form>

      <ModalRegister 
        show={modalShow} 
        onHide={() => cerrarModal()} 
        mensaje={mensaje}
        caritatriste={caritatriste}
      />
    </div>
  );
};

export default RegistroUsuario;
