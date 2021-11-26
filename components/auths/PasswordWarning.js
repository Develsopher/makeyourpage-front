import React from "react";
import styled from "styled-components";
import RedIcon from "../../public/statics/svg/cancel_mark.svg";
import GreenCheckIcon from "../../public/statics/svg/check_mark.svg";

const Container = styled.p`
  color: ${({ isValid }) => (isValid ? "green" : "red")};
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 14px;
  margin-bottom: 5px;
  svg {
    fill: ${({ isValid }) => (isValid ? "green" : "red")};
    /* background-color: yellow; */
    position: relative;
    /* left: 4px; */
    top: 4px;
  }
`;

export default function PasswordWarning({ isValid, text }) {
  return (
    <Container isValid={isValid}>
      {isValid ? <GreenCheckIcon /> : <RedIcon />}
      {text}
    </Container>
  );
}
