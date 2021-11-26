import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 300px;
  height: 48px;
  border: 0;
  border-radius: 4px;
  background-color: black;
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
  outline: none;
  cursor: pointer;
`;
const Button = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
