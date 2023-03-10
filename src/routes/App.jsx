import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../style/GlobalStyles";
import { ThemeLight, ThemeDark } from "../style/Theme";
import { Layout } from "../components/Layout";
import { Home } from "../containers/Home";
import { Project } from "../containers/Project";
import { NotFound } from "../containers/NotFound";

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage("DarkMode", true);
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? ThemeDark : ThemeLight}>
        <GlobalStyles />
        <Layout darkMode={[darkMode, setDarkMode]}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/project" component={Project} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
