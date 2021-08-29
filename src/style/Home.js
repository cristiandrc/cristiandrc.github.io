import styled from "styled-components";

export const Div = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 400px;
`;
