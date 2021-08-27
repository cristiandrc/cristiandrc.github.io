import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
`;

export const Div = styled.div`
  width: 100%;
  height: 100%;
  max-width: 950px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  p {
    font-size: 30px;
  }
`;

export const Nav = styled.nav`
  width: 200px;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
