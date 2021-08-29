import React, { useRef } from "react";
import { Link } from "../style/Header";
import { HeaderStyle, Logo, Div, Nav } from "../style/Header";
const Header = () => {
  const Home = useRef();
  const Project = useRef();

  const handleClick = (e) => {
    Home.current.removeAttribute("aria-current");
    Project.current.removeAttribute("aria-current");
    e.target.setAttribute("aria-current", "page");
  };

  return (
    <HeaderStyle>
      <Div>
        <Logo to="/">CR</Logo>
        <Nav>
          <ul>
            <li>
              <Link ref={Home} onClick={handleClick} aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link ref={Project} onClick={handleClick} to="/project">
                Proyectos
              </Link>
            </li>
          </ul>
        </Nav>
      </Div>
    </HeaderStyle>
  );
};

export { Header };
