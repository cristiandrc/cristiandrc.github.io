import React from "react";
import styled from "styled-components";
const Burger = styled.button`
  display: none;

  @media (max-width: 725px) {
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
  }
`;

const Span = styled.span`
  position: absolute;
  width: 30px;
  height: 4px;
  background-color: ${({ theme }) => theme.color};
  border-radius: 4px;
  left: 0;
  top: ${(props) => (props.top ? "3px" : props.center && "13px")};
  bottom: ${(props) => props.bottom && "3px"};
  transition: 0.8s ease;

  transform: ${({ top, bottom, open }) => {
    if (top && open) {
      return `rotate(-45deg); top: 13px`;
    } else if (bottom && open) {
      return `rotate(45deg); bottom: 13px`;
    }
  }};
  opacity: ${({ center, open }) => center && open && "0;"};
`;

const BurgerButton = ({ onClick, open }) => {
  return (
    <Burger onClick={() => onClick((state) => !state)}>
      <Span open={open} top></Span>
      <Span open={open} center></Span>
      <Span open={open} bottom></Span>
    </Burger>
  );
};

export { BurgerButton };
