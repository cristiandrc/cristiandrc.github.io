import React, { useRef, useEffect, useState } from "react";
import { Link } from "../style/Header";
import { useLocation } from "react-router-dom";
import { HeaderStyle, Logo, Div, Nav } from "../style/Header";
import { BurgerButton } from "./BurgerButton";

const Header = () => {
  const [open, setOpen] = useState(false);
  const Home = useRef();
  const Project = useRef();
  const { pathname } = useLocation();

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen((state) => !state);
  };
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
        <Nav open={open} onClick={handleOpen}>
          <ul>
            <li>
              <Link ref={Home} to="/" onClick={handleOpen}>
                Inicio
              </Link>
            </li>
            <li>
              <Link ref={Project} to="/project" onClick={handleOpen}>
                Proyectos
              </Link>
            </li>
          </ul>
        </Nav>
        <BurgerButton onClick={setOpen} open={open} />
      </Div>
    </HeaderStyle>
  );
};

export { Header };
