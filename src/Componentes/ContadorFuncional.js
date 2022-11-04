import React, { useState } from "react";
import "./ContadorFuncional.css";
import Boton from "../elemento/Boton";

const ContadorFuncional = () => {
  const [cuenta, cambiarCuenta] = useState(0);

  const incrementar = (cantidad) => {
    cambiarCuenta(cuenta + cantidad);
  };

  const disminuir = (cantidad) => {
    cambiarCuenta(cuenta - cantidad);
  };

  return (
    <div>
      <h1>Contador: {cuenta}</h1>
      <Boton negro onClick={() => incrementar(20)}>
        Incrementar
      </Boton>
      <Boton negro onClick={() => disminuir(5)}>
        Disminuir
      </Boton>
    </div>
  );
};

export default ContadorFuncional;
