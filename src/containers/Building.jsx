import React from "react";
import styled from "styled-components";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #333;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    border-bottom: 1px solid white;
    font-size: 35px;
    margin: 20px 0;
    padding-bottom: 20px;
    text-transform: uppercase;
    text-align: center;
    width: 90%;
    min-width: 350px;
    max-width: 550px;
  }
  p {
    font-size: 25px;
    margin-bottom: 20px;
  }

  a {
    color: white;
  }

  @media (min-width: 620px) {
    h1 {
      font-size: 60px;
    }
  }
`;

const Building = () => {
  return (
    <Section>
      <h1>En Construcción</h1>
      <p>Estará lista pronto</p>
      <div>
        <a href="https://github.com/cristiandrc" target="_blank">
          <DiGithubBadge size="42px" />
        </a>
        <a href="https://www.linkedin.com/in/cristiandrojasc/" target="_blank">
          <AiFillLinkedin size="40px" />
        </a>
      </div>
    </Section>
  );
};

export default Building;
