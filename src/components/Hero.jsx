import React from "react";
import { Div, H2, Pw, P, A, Image } from "../style/Hero";
const Hero = () => {
  return (
    <Div>
      <div>
        <Pw>Desarrollador Frontend</Pw>
        <H2>Cristian Rojas</H2>
        <P>
          Soy un Maquetador Web, apasionado por el diseño y la programación web,
          creo proyectos de código abierto.
        </P>
        <A href="#">GitHUB</A>
        <A href="#">Linkeding</A>
      </div>
      <Image src="" alt="" />
    </Div>
  );
};

export { Hero };
