import styled from "styled-components";

export const Div = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-row: auto;
  gap: 80px;
  padding: 30px;
  margin: 50px 0;
  width: 100%;

  @media (max-width: 725px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
