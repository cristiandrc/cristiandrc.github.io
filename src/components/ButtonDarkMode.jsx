import React from "react";
import styled, { css } from "styled-components";
import { BsMoon, BsSun } from "react-icons/bs";
const Button = styled.button`
  position: relative;
  width: 60px;
  height: 25px;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.bgCards};
  color: ${({ theme }) => theme.colorCards};
  border-radius: 10px;
  cursor: pointer;
  transition: color 1s ease;
  /* overflow: hidden; */

  &::after {
    content: "";
    position: absolute;
    background-color: #fff;
    border-radius: 9px;
    width: 50%;
    height: 100%;
    transition: transform 1s ease;
    ${({ state }) =>
      state === false
        ? css`
            transform: translateX(-50%);
          `
        : css`
            transform: translateX(50%);
          `}
  }
`;

const ButtonDarkMode = ({ stateDarkMode }) => {
  const [darkMode, setDarkMode] = stateDarkMode;
  return (
    <Button onClick={() => setDarkMode(!darkMode)} state={darkMode}>
      <BsSun size="20" />
      <BsMoon size="20" />
    </Button>
  );
};

export { ButtonDarkMode };
