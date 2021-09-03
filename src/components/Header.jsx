import React, { useRef, useEffect } from "react";
import { Link } from "../style/Header";
import { useLocation } from "react-router-dom";
import { HeaderStyle, Logo, Div, Nav } from "../style/Header";

const Header = () => {
  const Home = useRef();
  const Project = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      Home.current.setAttribute("aria-current", "page");
      Project.current.removeAttribute("aria-current");
    } else if (pathname === "/project") {
      Project.current.setAttribute("aria-current", "page");
      Home.current.removeAttribute("aria-current");
    } else {
      Home.current.removeAttribute("aria-current");
      Project.current.removeAttribute("aria-current");
    }
  }, [pathname]);

  return (
    <HeaderStyle>
      <Div>
        <Logo to="/">CR</Logo>
        <Nav>
          <ul>
            <li>
              <Link ref={Home} to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link ref={Project} to="/project">
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
