import React from "react";
import { Title, Div } from "../style/Project";
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
  {
    id: 0,
    name: "Todo-App",
    img: Images,
    text: "Aplicacion de Tareas",
    page: "https://cristiandrc.github.io/Todo-App/",
    github: "https://github.com/cristiandrc/Todo-App",
  },
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
    <>
      <Title>Proyectos</Title>
      <p>Es esta seccion podras ver los proyectos mas destacados</p>
      <Div>
        {Data.map((data, i) => (
          <Card key={i} {...data} />
        ))}
      </Div>
    </>
  );
};

export { Project };
