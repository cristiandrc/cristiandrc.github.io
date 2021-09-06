import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { Div, DivA, A, Cv } from "../style/Contact";
const Contact = () => {
  return (
    <Div>
      <h3>CONTACTO</h3>
      <DivA>
        <A
          href="https://www.linkedin.com/in/cristiandrojasc/"
          target="_blank"
          rel="noopener"
        >
          <AiFillLinkedin size="80px" />
        </A>
        <A href="https://github.com/cristiandrc" target="_blank" rel="noopener">
          <DiGithubBadge size="89" />
        </A>
      </DivA>
      <Cv
        target="_blank"
        href="https://drive.google.com/file/d/1khBiIaHqWmdvDm5DDqR43g0pWz_ZA6_V/view?usp=sharing"
        rel="noopener"
      >
        Descargar CV
      </Cv>
    </Div>
  );
};

export { Contact };
