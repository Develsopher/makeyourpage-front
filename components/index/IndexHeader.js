import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px 50px 5px 50px;
  background-color: black;
  font-size: 22px;
  font-family: "Raleway", sans-serif;
  z-index: 1000;
  & h1 {
    /* position: relative; */
    /* display: block; */
    color: white;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.3rem;
  }
  & ul {
    display: flex;
    align-items: center;
  }
  & a + a {
    margin-left: 80px;
  }
  & li {
    font-size: 21px;
    color: #fff;
    font-weight: 600;
    &:hover {
      color: #c34f75;
      cursor: pointer;
    }
  }
`;

export default function IndexHeader() {
  const handleContact = (e) => {
    window.scrollTo({ top: 2020, behavior: "smooth" });
  };

  return (
    <Header className="fixed">
      <a href="/">
        <div>
          <h1 className="logo">MAKE</h1>
          <h1
            className="logo"
            style={{ paddingLeft: "26px", color: "#c34f75" }}
          >
            YOUR
          </h1>
          <h1 className="logo" style={{ paddingLeft: "6px" }}>
            PAGE
          </h1>
        </div>
      </a>
      <ul>
        <a href="/workspace">
          <li>MAKE NOW</li>
        </a>
        <a onClick={handleContact}>
          <li>CONTACT</li>
        </a>
      </ul>
    </Header>
  );
}
