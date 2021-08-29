import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { Div, DivA, A, Cv } from "../style/Contact";
const Contact = () => {
  return (
    <Div>
      <h3>CONTACTO</h3>
      <DivA>
        <A href="#">
          <AiFillLinkedin size="80px" />
        </A>
        <A href="#">
          <DiGithubBadge size="89" />
        </A>
      </DivA>
      <Cv target="_blank" href="#">
        Descargar CV
      </Cv>
    </Div>
  );
};

export { Contact };
