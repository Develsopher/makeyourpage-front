import React from "react";
import styled from "styled-components";
const SectionFooter = styled.footer`
  padding: 10px 150px 10px 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  & div + div {
    margin-left: 230px;
  }
  & .logo_box {
    display: flex;
    & h1 {
      margin-left: 10px;
    }
  }
  & .copyRight {
    display: flex;
    & p {
      margin-left: 10px;
    }
  }
  & .reference {
    display: flex;
    & p {
      margin-left: 10px;
    }
  }
`;
export default function Footer() {
  return (
    <SectionFooter>
      <div className="logo_box">
        <h1 className="logo">MAKE</h1>
        <h1 className="logo" style={{ color: "#c34f75" }}>
          YOUR
        </h1>
        <h1 className="logo">PAGE</h1>
      </div>
      <div className="copyRight">
        <p>© Copyright 2021 Make Your Page.</p>
        <p>All rights reserved.</p>
      </div>
      <div className="reference">
        <p>GitHub</p>
        <p>Notion</p>
      </div>
    </SectionFooter>
  );
}
