import React from "react";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "../style/GlobalStyles";
// import Building from "../containers/Building";
import { Layout } from "../components/Layout";
import { Home } from "../containers/Home";
import { Project } from "../containers/Project";
import { NotFound } from "../containers/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project" component={Project} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
