import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Div, Section } from "../style/Layout";
const Layout = ({ children }) => {
  return (
    <Div>
      <Header />
      <Section>{children}</Section>
      <Footer />
    </Div>
  );
};

export { Layout };
