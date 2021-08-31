import React, { useRef, useEffect } from "react";
import { Link } from "../style/Header";
import { useLocation } from "react-router-dom";
import { HeaderStyle, Logo, Div, Nav } from "../style/Header";

const Header = () => {
  const Home = useRef();
  const Project = useRef();
  let { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      Home.current.setAttribute("aria-current", "page");
    } else if (pathname === "/project") {
      Project.current.setAttribute("aria-current", "page");
    }
  }, []);

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
              <Link ref={Home} onClick={handleClick} to="/">
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
