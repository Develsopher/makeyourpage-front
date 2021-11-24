import React, { useEffect } from "react";
import styled from "styled-components";
import IndexHeader from "../components/index/IndexHeader";
import SectionTop from "../components/index/SectionTop";
import SectionMiddle from "../components/index/SectionMiddle";
import SectionBottom from "../components/index/SectionBottom";

const Visual = styled.div`
  min-width: 720px;
  position: relative;
  font-family: "Raleway", sans-serif;
`;

export default function Home() {
  return (
    <>
      <Visual id="wrap">
        <IndexHeader />
        <main>
          <SectionTop />
          <SectionMiddle />
          <SectionBottom />
        </main>
      </Visual>
    </>
  );
}
