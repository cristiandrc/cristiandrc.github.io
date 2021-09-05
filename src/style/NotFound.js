import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div`
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title404 = styled.h2`
  font-size: 200px;
  @media (max-width: 725px) {
    font-size: 130px;
  }
  @media (max-width: 400px) {
    font-size: 100px;
  }
`;

export const Error404 = styled.h3`
  font-size: 80px;
  margin-bottom: 80px;
  @media (max-width: 725px) {
    font-size: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 400px) {
    font-size: 40px;
  }
`;

export const ErrorText = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 725px) {
    padding: 0 10px;
  }
`;

export const Link = styled(LinkRouter)`
  display: grid;
  place-items: center;
  width: 230px;
  height: 55px;
  background-color: #283543;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 25px;
  text-align: center;
  margin: 10px auto;
  transition: 0.4s ease;
  letter-spacing: 1px;
  &:hover {
    box-shadow: 0px 4px 20px 0px #767676;
  }

  @media (max-width: 725px) {
    width: 200px;
    height: 50px;
    font-size: 15px;
  }
`;
