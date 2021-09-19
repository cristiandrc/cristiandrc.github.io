import React from "react";
import { Container, Title, Div } from "../style/Project";
import { Card } from "../components/Card";
import imgTodoApp from "../assets/img/Todo-App.png";
import imgWeatherApp from "../assets/img/Weather-App.png";
const Data = [
  {
    id: 0,
    name: "Todo-App",
    img: imgTodoApp,
    page: "https://cristiandrc.github.io/Todo-App/",
    github: "https://github.com/cristiandrc/Todo-App",
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
