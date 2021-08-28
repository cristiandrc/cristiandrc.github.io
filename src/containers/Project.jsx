import React from "react";
import { Card } from "../components/Card";
const Data = [
  {
    id: 0,
    name: "Todo-App",
    img: "https://abrahamcalsin.com/projects-img/motivation_design_template.svg",
    text: "Adm tareas",
    page: "https://cristiandrc.github.io/Todo-App/",
    github: "https://github.com/cristiandrc/Todo-App",
  },
];
const Project = () => {
  return (
    <>
      <h2>Proyectos</h2>
      <p>Es esta seccion podras ver los proyectos mas destacados</p>
      {Data.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </>
  );
};

export { Project };
