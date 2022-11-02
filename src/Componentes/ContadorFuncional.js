import React, { useState } from "react";
import "./ContadorFuncional.css";

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
      <button className="boton2" onClick={() => incrementar(20)}>
        Incrementar
      </button>
      <button className="boton2" onClick={() => disminuir(5)}>
        Disminuir
      </button>
    </div>
  );
};

export default ContadorFuncional;
