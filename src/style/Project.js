import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;

  @media (max-width: 725px) {
    padding: 40px 10px 10px;
  }
`;
export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
