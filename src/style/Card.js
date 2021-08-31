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
  background-color: #283543;

  img {
    width: 266px;
    height: 197px;
    border-radius: 10px;
    object-fit: cover;
  }
  p {
    text-align: center;
    color: white;
  }
`;

export const Name = styled.h2`
  color: white;
  align-items: left;
`;
export const DivA = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-around; */
`;

export const A = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 180px;
  height: 45px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 25px;
  border: solid #dadada 3px;
  text-align: center;
  margin: 10px auto;
  transition: 0.4s ease;
  letter-spacing: 1px;

  &:hover {
    background-color: #dadada;
    color: #283543;
  }
`;
