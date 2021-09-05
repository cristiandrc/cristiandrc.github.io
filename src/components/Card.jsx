import React from "react";
import { Div, Name, A } from "../style/Card";
import { DiGithubBadge } from "react-icons/di";
import { MdLanguage } from "react-icons/md";

const Card = ({ name, img, page, github }) => {
  return (
    <Div>
      <img src={img} alt={name} />
      <Name>{name}</Name>
      <div>
        <A target="_blank" href={page}>
          <MdLanguage />
          Proyecto
        </A>
        <A target="_blank" href={github}>
          <DiGithubBadge /> Codigo
        </A>
      </div>
    </Div>
  );
};

export { Card };
