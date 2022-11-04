import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Usuario from "./Componentes/Usuario";
import FormularioInicioSesion from "./Componentes/FormularioInicioSesion";
import ContadorFuncional from "./Componentes/ContadorFuncional";
import "./index.css";
import Boton from "./elemento/Boton";

const nombre = "gambito";

const App = () => {
  const [sesion, cambiarSesion] = useState(true);

  return (
    <div className="contenedor">
      {sesion === true ? (
        <div>
          <Usuario />
          <ContadorFuncional />
          {/* <button onClick={() => cambiarSesion(false)}>Cerrar sesion</button> */}
          <Boton largo onClick={() => cambiarSesion(false)}>
            Cerrar Sesion
          </Boton>
        </div>
      ) : (
        <>
          <p>{nombre}</p>
          <p>debes de completar</p>
          <FormularioInicioSesion cambiar={cambiarSesion} />

          {/* <button onClick={() => cambiarSesion(true)}>Iniciar sesion</button> */}
        </>
      )}
    </div>
  );
};

/* const jsx = (
  <div>
    {session === true ? (
      <div>
        <Usuario />
        <Usuario />
      </div>
    ) : (
      <>
        <h1> practica mas</h1>
        <p>te falta mas</p>
      </>
    )}
  </div>
); */

/* const verificarSession = (session) => {
  if (session === true) {
    return jsx;
  } else {
    return <h1>No puedes acceder</h1>;
  }
}; */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
