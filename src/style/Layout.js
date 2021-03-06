import styled from "styled-components";

export const Div = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Section = styled.section`
  min-height: calc(100vh - 120px);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 80px;

  @media (max-width: 725px) {
    padding: 0;
  }
`;
