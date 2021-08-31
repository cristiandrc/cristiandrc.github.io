import React from "react";
import { Div, Name, DivA, A } from "../style/Card";
import { DiGithubBadge } from "react-icons/di";
import { MdLanguage } from "react-icons/md";

const Card = ({ name, img, text, page, github }) => {
  return (
    <Div>
      <img src={img} alt={name} />
      <Name>{name}</Name>
      {/* <p>{text}</p> */}
      <DivA>
        <A target="_blank" href={page}>
          <MdLanguage />
          Proyecto
        </A>
        <A target="_blank" href={github}>
          <DiGithubBadge /> Codigo
        </A>
      </DivA>
    </Div>
  );
};

export { Card };
