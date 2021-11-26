import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 70px;
  & h1 {
    color: color;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.3rem;
  }
`;

export default function Logo() {
  return (
    <Container>
      <h1 className="logo">MAKE</h1>
      <h1 className="logo" style={{ paddingLeft: "26px", color: "#c34f75" }}>
        YOUR
      </h1>
      <h1 className="logo" style={{ paddingLeft: "3px" }}>
        PAGE
      </h1>
    </Container>
  );
}
