import React from "react";

import { Div, H2, Pw, P, Image } from "../style/Hero";
const Hero = () => {
  return (
    <Div>
      <div>
        <Pw>Desarrollador Frontend</Pw>
        <H2>Cristian Rojas</H2>
        <P>{/* Hola, <br /> Soy un desarrollador web junior. */}</P>
      </div>
      <Image src="" alt="" />
    </Div>
  );
};

export { Hero };
