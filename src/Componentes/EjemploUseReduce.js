import React, { useReducer } from "react";
import Boton from "../elemento/Boton";

// accion
// {tipo: INCREMENTAR}

//EStado Inicial
const contadorInicial = { contador: 0 };

//Reducer
const reducer = (estado, accion) => {
  switch (accion.tipo) {
    case "INCREMENTAR":
      return { contador: estado.contador + 5 };
    case "DISMINUIR":
      return { contador: estado.contador - 3 };
    default:
      return estado;
  }
};

const EjemploUseReducer = () => {
  const [estado, dispatch] = useReducer(reducer, contadorInicial);
  return (
    <div>
      <h1>Contador: {estado.contador}</h1>
      <Boton negro onClick={() => dispatch({ tipo: "INCREMENTAR" })}>
        Incrementar
      </Boton>
      <Boton negro onClick={() => dispatch({ tipo: "DISMINUIR" })}>
        Disminuir
      </Boton>
    </div>
  );
};

export default EjemploUseReducer;
