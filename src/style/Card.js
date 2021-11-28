import styled from "styled-components";

export const Div = styled.div`
  width: 290px;
  min-height: 400px;
  margin: 50px 10px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bgCards};
  box-shadow: 0 5px 25px -8px rgb(97 218 250 / 50%);
  img {
    width: 266px;
    height: 197px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const Name = styled.h2`
  color: ${({ theme }) => theme.colorCards};
  align-items: left;
`;

export const A = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 180px;
  height: 45px;
  color: ${({ theme }) => theme.colorCards};
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 25px;
  border: solid ${({ theme }) => theme.bgColor} 3px;
  text-align: center;
  margin: 10px auto;
  transition: 0.4s ease;
  letter-spacing: 1px;

  &:hover {
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.color};
  }
`;

export const DivA = styled.div`
  height: 120px;
`;
