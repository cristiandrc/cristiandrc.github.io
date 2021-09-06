import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../style/GlobalStyles";
import { ThemeLight, ThemeDark } from "../style/Theme";
import { Layout } from "../components/Layout";
import { Home } from "../containers/Home";
import { Project } from "../containers/Project";
import { NotFound } from "../containers/NotFound";

const App = () => {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? ThemeDark : ThemeLight}>
        <GlobalStyles />
        <Layout darkMode={[darkMode, setdarkMode]}>
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
