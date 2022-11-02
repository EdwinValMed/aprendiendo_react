import React from "react";
import Titulo, { TituloAzul, TituloRojo, TituloGreen } from "./titulo";

const Usuario = () => {
  const pais = undefined;
  const amigos = ["Luis", "Carlos", "Alex", "Edwin", "Javier"];
  return (
    <div>
      <TituloRojo usuario="jose" />
      <TituloAzul usuario="Edwin" color="blue" />
      {<TituloGreen usuario="jose" color="green" />}
      <p>excelente codigo</p>
      {pais && <p> tu eres de : {pais}</p>}
      <ul>
        {amigos.map((amigo, index) => (
          <li key={index}>{amigo}</li>
        ))}
      </ul>
      <p>que tengas un buen dia!!</p>
    </div>
  );
};
export default Usuario;
