import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  max-height: 355px;
  background-color: ${({ theme }) => theme.bgCards};
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 5px 25px -8px rgb(97 218 250 / 50%);
  h3 {
    color: ${({ theme }) => theme.colorCards};
  }
`;

export const DivA = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 174px;
  margin: 0 auto;
`;

export const A = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colorCards};
  padding-top: 30px;
  transition: 0.4s ease;
  &:hover {
    /* color: ${({ theme }) => theme.color}; */
    transform: scale(1.1);
  }
`;

export const Cv = styled.a`
  display: grid;
  place-items: center;
  width: 180px;
  height: 45px;
  color: ${({ theme }) => theme.colorCards};
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 25px;
  border: solid ${({ theme }) => theme.colorCards} 3px;
  text-align: center;
  margin: 10px auto;
  transition: 0.4s ease;
  letter-spacing: 1px;
  &:hover {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.color};
  }
`;
