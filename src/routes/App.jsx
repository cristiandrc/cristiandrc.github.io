import React from "react";
import { GlobalStyles } from "../style/GlobalStyles";
// import Building from "../containers/Building";
import { Home } from "../containers/Home";
import { Layout } from "../components/Layout";
const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default App;
