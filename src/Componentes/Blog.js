import React from "react";
import styled from "styled-components";

const Blog = () => {
  return (
    <ContenedorBlog>
      <Titulo>Blog</Titulo>
      <div>
        <Ariculo>Titulo 1</Ariculo>
        <Ariculo>Titulo 2</Ariculo>
        <Ariculo>Titulo 3</Ariculo>
      </div>
    </ContenedorBlog>
  );
};

const ContenedorBlog = styled.div`
  margin: 40px 0 20px 0;
`;

const Titulo = styled.h2`
  margin-botton: 10px;
`;
const Ariculo = styled.p`
  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

export default Blog;
