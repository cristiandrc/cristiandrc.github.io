import styled from "styled-components";
export const Div = styled.div`
  width: 100%;
  min-height: 275px;
  background-color: #283543;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 5px 25px -8px rgb(97 218 250 / 50%);
  p,
  h3 {
    color: white;
  }
`;
export const Ul = styled.ul`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px auto;
  text-align: center;
`;

export const Li = styled.li`
  /* width: 50px; */
  min-width: 82px;
  margin: 0 20px 5px;

  @media (max-width: 400px) {
    width: 59px;
  }
`;
