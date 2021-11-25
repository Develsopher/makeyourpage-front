import React from "react";
import styled from "styled-components";
import CheckMarkIcon from "../public/statics/svg/check_mark.svg";

export default function Home() {
  return (
    <div className="container">
      <marquee>SVG Cat!</marquee>
      <CheckMarkIcon />
      <style jsx>{`
        .container {
          width: 600px;
          margin: 100px auto;
        }
      `}</style>
    </div>
  );
}
