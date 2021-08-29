import React from "react";
import { Div, A } from "../style/Card";

const Card = ({ title, img, text, page, github }) => {
  return (
    <Div>
      <img src="" alt="" />
      <p>{text}</p>
      <div>
        <A target="_blank" href={page}>
          Proyecto
        </A>
        <A target="_blank" href={github}>
          Codigo
        </A>
      </div>
    </Div>
  );
};

export { Card };
