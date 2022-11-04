import React, { useState } from "react";
import styles from "./FormularioInicioSesion.module.css";
import Boton from "../elemento/Boton";

const FormularioInicioSesion = (props) => {
  const [usuario, cambiarUsuario] = useState("");
  const [password, cambiarPassword] = useState("");

  /*  const onChangeUsuario = (evento) => {
    cambiarUsuario(evento.target.value);
  };
  const onChangePassword = (evento) => {
    cambiarPassword(evento.target.value);
  }; */

  const onChange = (evento) => {
    if (evento.target.name === "usuario") {
      cambiarUsuario(evento.target.value);
    } else if (evento.target.name === "password") {
      cambiarPassword(evento.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (usuario === "carlos" && password === "123") {
      props.cambiar(true);
    } else {
      alert("datos incorrectos");
      cambiarUsuario("");
      cambiarPassword("");
      /* esto dos es para dejarlo vavio despues del incorrecto */
    }
  };

  return (
    <form action="" onSubmit={onSubmit} className={styles.formulario}>
      <div>
        <h1 className="encabezado"> Debe de iniciar Sesion</h1>
        <label htmlFor="usuario" className={styles.label}>
          Usuario
        </label>
        <input
          type="text"
          name="usuario"
          id="usuario"
          value={usuario}
          onChange={onChange}
          className={styles.input}
        />
      </div>
      <div>
        <label htmlFor="password" className={styles.label}>
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
          className={styles.input}
        />
      </div>
      {/* <button type="submit" className={styles.boton}>
        Iniciar Sesion
      </button> */}
      <Boton> Iniciar Sesion </Boton>
    </form>
  );
};

export default FormularioInicioSesion;
