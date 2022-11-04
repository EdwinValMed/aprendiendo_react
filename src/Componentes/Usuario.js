import React from "react";
import Titulo, { TituloAzul, TituloRojo, TituloGreen } from "./titulo";
import styled from "styled-components";

const Usuario = () => {
  const pais = undefined;
  const amigos = ["Luis", "Carlos", "Alex", "Edwin", "Javier"];
  return (
    <div>
      <TituloRojo usuario="jose" />
      <TituloAzul usuario="Edwin" color="blue" />
      {<TituloGreen usuario="jose" color="green" />}
      <parrafo>tu lista de amigos </parrafo>
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
const parrafo = styled.p`
  margin-bottom: 15px;
`;

export default Usuario;
