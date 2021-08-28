import styled from "styled-components";

export const Div = styled.div`
  width: 280px;
  min-height: 350px;
  margin: 50px 0;
  padding: 10px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #3f3f3f;
  img {
    width: 250px;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
  }
  p {
    text-align: center;
  }
`;

export const A = styled.a`
  display: inline-block;
  height: 30px;
  width: 80px;
  text-align: center;
  padding-top: 4px;
  border-radius: 5px;
  color: white;
  margin: 0 5px;
  text-decoration: none;
  background-color: #838383;
`;
