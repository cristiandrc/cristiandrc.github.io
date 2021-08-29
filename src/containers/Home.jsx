import React from "react";
import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import { Skills } from "../components/Skills";
import { Div } from "../style/Home";
const Home = () => {
  return (
    <>
      <Hero />
      <Div>
        <Contact />
        <Skills />
      </Div>
    </>
  );
};

export { Home };
