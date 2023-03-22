import React, { useEffect } from "react";
import {
  Container,
  Title404,
  Error404,
  ErrorText,
  Link,
} from "../style/NotFound";

const NotFound = () => {
  useEffect(() => {
    if (dataLayer) {
      dataLayer.push({ event: "error_404" });
    }
  }, []);
  return (
    <Container>
      <Title404>¡Ups! </Title404>
      <Error404>Error 404</Error404>
      <ErrorText>
        Lo sentimos no hemos podido encontrar la página que buscas
      </ErrorText>
      <Link to="/">Regresar al inicio</Link>
    </Container>
  );
};

export { NotFound };
