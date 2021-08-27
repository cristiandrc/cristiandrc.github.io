import React from "react";
import { HeaderStyle, Div, Nav } from "../style/Header";
const Header = () => {
  return (
    <HeaderStyle>
      <Div>
        <p>CROJAS</p>
        <Nav>
          <ul>
            <li>Inicio</li>
            <li>Proyectos</li>
          </ul>
        </Nav>
      </Div>
    </HeaderStyle>
  );
};

export { Header };
