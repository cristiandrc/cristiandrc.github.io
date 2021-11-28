import React from "react";
import { Container, Title, Div } from "../style/Project";
import { Card } from "../components/Card";
import imgTodoApp from "../assets/img/Todo-App.png";
import imgWeatherApp from "../assets/img/Weather-App.png";
import imgTodoBackEnd from "../assets/img/TodoAppBackEnd.png";

const Data = [
  {
    id: 0,
    name: "ToDo-App",
    img: imgTodoApp,
    page: "https://todo-app-cristiandrc.vercel.app/",
    github: "https://github.com/cristiandrc/Todo-App",
  },
  {
    id: 2,
    name: "BackEnd ToDo-App",
    img: imgTodoBackEnd,
    page: "",
    github: "https://github.com/cristiandrc/BackEndTodoApp",
  },
  {
    id: 1,
    name: "Weather-App",
    img: imgWeatherApp,
    page: "https://weather-app-cdrc.netlify.app/",
    github: "https://github.com/cristiandrc/weatherApp",
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
