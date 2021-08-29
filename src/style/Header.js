import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
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
  color: #283543;
`;

export const Link = styled(LinkRouter)`
  position: relative;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1px;
  color: #283543;
  &[aria-current] {
    /* color: #333; */

    &::after {
      content: " ";
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      bottom: -2px;
      background-color: #283543;
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

  @media (max-width: 400px) {
    width: 200px;
  }
`;
