import React from "react";

const TituloAzul = ({ usuario, color }) => {
  return (
    <h1 className="titulo" style={{ color: color }}>
      hola {usuario}
    </h1>
  );
};

const TituloRojo = ({ usuario }) => {
  const uva = "red";
  return (
    <h1 className="titulo" style={{ color: uva }}>
      hola {usuario}
    </h1>
  );
};

const TituloGreen = ({ usuario, color }) => {
  return (
    <h1 className="titulo" style={{ color: color }}>
      hola {usuario}
    </h1>
  );
};
export { TituloRojo, TituloAzul, TituloGreen };
