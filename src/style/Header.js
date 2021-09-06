import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  position: relative;
`;

export const Div = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;

  p {
    font-size: 30px;
  }
`;

export const Logo = styled(LinkRouter)`
  font-size: 40px;
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.color}; ;
`;

export const Link = styled(LinkRouter)`
  position: relative;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color};
  &[aria-current] {
    &::after {
      content: " ";
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      bottom: -2px;
      background-color: ${({ theme }) => theme.color};
    }
  }
`;

export const Nav = styled.nav`
  width: 250px;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 725px) {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: ${(props) => (props.open === true ? "0" : "-100vh")};
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;

    align-items: center;
    background-color: ${({ theme }) => theme.bgBurger};
    transition: 0.8s top ease;
    ul {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li {
        margin: 15px 0;
      }
    }
  }
`;
