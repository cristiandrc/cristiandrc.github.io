import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  height: 60px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px ${({ theme }) => theme.color};
  padding: 0 10px;
  color: ${({ theme }) => theme.color}; ;
`;
