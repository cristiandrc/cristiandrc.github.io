import React from "react";
import { Div, Name, A, DivA } from "../style/Card";
import { DiGithubBadge } from "react-icons/di";
import { MdLanguage } from "react-icons/md";

const Card = ({ name, img, page, github }) => {
  return (
    <Div>
      <img src={img} alt={name} />
      <Name>{name}</Name>
      <DivA>
        {page && (
          <A target="_blank" href={page}>
            <MdLanguage />
            Proyecto
          </A>
        )}
        <A target="_blank" href={github}>
          <DiGithubBadge /> Codigo
        </A>
      </DivA>
    </Div>
  );
};

export { Card };
