import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 30px;

  @media (max-width: 725px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 60px);
    padding: 0;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Name = styled.h1`
  font-size: 45px;
  text-align: center;
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

export const Pw = styled.p`
  font-size: 30px;
  width: 100%;
  border-bottom: 3px solid #283543;
  padding-bottom: 5px;
  margin: 10px 0 10px;
  text-align: center;
  @media (max-width: 400px) {
    font-size: 25px;
  }
`;

export const P = styled.p`
  width: 100%;
  max-width: 600px;
  font-size: 20px;
  margin: 20px 0 40px;
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

export const Image = styled.div`
  width: 270px;
  height: 270px;
  border-radius: 50%;
  background: gray;
`;
