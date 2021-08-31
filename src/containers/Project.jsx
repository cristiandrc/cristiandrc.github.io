import React from "react";
import { Container, Title, Div } from "../style/Project";
import { Card } from "../components/Card";
import Images from "../assets/img/Todo-App.png";

const Data = [
  {
    id: 0,
    name: "Todo-App",
    img: Images,
    text: "Aplicacion de Tareas",
    page: "https://cristiandrc.github.io/Todo-App/",
    github: "https://github.com/cristiandrc/Todo-App",
  },
];
const Project = () => {
  return (
    <Container>
      <Title>Proyectos</Title>
      <p>Es esta sección podrás ver los proyectos más destacados</p>
      <Div>
        {Data.map((data, i) => (
          <Card key={i} {...data} />
        ))}
      </Div>
    </Container>
  );
};

export { Project };
