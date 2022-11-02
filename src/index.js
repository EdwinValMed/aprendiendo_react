import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Usuario from "./Componentes/Usuario";
import FormularioInicioSesion from "./Componentes/FormularioInicioSesion";
import contador from "./Componentes/contador";

const nombre = "gambito";

const App = () => {
  const [sesion, cambiarSesion] = useState(false);

  return (
    <div>
      {sesion === true ? (
        <div>
          <Usuario />
          <button onClick={() => cambiarSesion(false)}>Cerrar sesion</button>
        </div>
      ) : (
        <>
          <h1> Debe de iniciar Sesion</h1>
          <p>{nombre}</p>
          <p>debes de completar</p>
          <FormularioInicioSesion cambiar={cambiarSesion} />
          <contador />
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
