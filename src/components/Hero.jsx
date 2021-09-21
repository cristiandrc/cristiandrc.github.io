import React from "react";
import img from "../assets/img/CV.png";

import { Div, Name, Pw, DivTitle, Image } from "../style/Hero";
const Hero = () => {
  return (
    <Div>
      <DivTitle>
        <Pw>FRONTEND DEVELOPER</Pw>
        <Name>CRISTIAN ROJAS</Name>
      </DivTitle>
      <Image src={img} alt="Cristian" />
    </Div>
  );
};

export { Hero };
