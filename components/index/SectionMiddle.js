import React, { useEffect } from "react";
import styled from "styled-components";

const SectionMiddle1 = styled.section`
  position: relative;
  top: -65px;
  height: 100vh;
  display: flex;
  align-items: center;
  background: black;
  color: #fff;
  font-family: montserrat;
  overflow-x: hidden;
  line-height: 1.7;
  z-index: 100;
  transform: skewY(5deg);
  & .bg-text-container {
    transform: translateX(-50%);
    left: 50%;
    position: absolute;
    z-index: -999;
  }
  @keyframes text-scrolling {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0%, 0, 0);
    }
  }
  & .animate-text {
    animation: text-scrolling 20s linear infinite;
    will-change: transform;
    display: block;
    position: relative;
    white-space: nowrap;
  }
  & .left {
    animation-direction: reverse;
  }
  & span {
    font-size: 280px;
    color: transparent;
    -webkit-text-stroke: 2px #c34f75;
    text-transform: uppercase;
    display: inline-block;
    line-height: 0.75;
    min-width: auto;
    font-weight: 800;
  }
  & .container {
    padding: 30px;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;

    & .col {
      max-width: 600px;
      margin: 0;
    }
  }
  h1 {
    font-size: 90px;
    margin: 0;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
  }
`;
const SectionMiddle2 = styled.section`
  position: relative;
  background-color: black;
  top: -140px;
  width: 100%;
  & h1 {
    padding-top: 100px;
    color: white;
    text-align: center;
    font-size: 60px;
    letter-spacing: 0.3rem;
    font-family: "Raleway", sans-serif;
  }
  & ul {
    padding-top: 50px;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
    & li {
      position: relative;
      width: 300px;
      height: 380px;
      background-color: #f5f5f5;
      border-radius: 10%;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      & p {
        text-align: center;
        font-size: 20px;
        padding: 20px 40px 40px 40px;
        color: gray;
        line-height: 30px;
      }
    }
    & li + li {
      margin-left: 80px;
    }
    & li:hover {
      transform: scale(1.1);
      & p {
        color: black;
        font-weight: 400;
      }
    }
  }
  & .middle_section2_image {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 25%;
    top: -10%;
  }
  & .middle_section2_h1 {
    text-align: center;
    color: #c34f75;
    font-size: 26px;
    font-weight: bold;
    padding-top: 130px;
  }
`;

export default function SectionMiddle() {
  useEffect(() => {
    let parent = document.querySelectorAll(".animate-text");
    for (let i = 0; i < parent.length; i++) {
      parent[i].style.width = parent[i].children[0].clientWidth + "px";
    }
  }, []);

  return (
    <section className="middle">
      <SectionMiddle1 className="middle_section1">
        <div className="bg-text-container">
          <div className="animate-text">
            <span>Make Your Page&nbsp;</span>
            <span>Make Your Page&nbsp;</span>
          </div>
          <div className="animate-text left">
            <span>Make Your Page&nbsp;</span>
            <span>Make Your Page&nbsp;</span>
          </div>
        </div>

        <div className="container">
          <div className="col">
            <h1>Portfolio</h1>
            <p>
              Don't you need a portfolio? You can create your own portfolio page
              without the help of a developer.Try making it right now. Maybe it
              can change your life.
            </p>
          </div>
        </div>
      </SectionMiddle1>

      <SectionMiddle2 className="middle_section2">
        <h1>We Provide</h1>
        <ul>
          <li>
            <div className="middle_section2_image">
              <img src="images/pallete.png" alt="pallete" />
            </div>
            <div className="middle_section2_h1">DIY EDITTING</div>
            <p>
              You can make it by yourself without the help of an expert. Also,
              You can fix it at any time.
            </p>
          </li>
          <li>
            <div className="middle_section2_image">
              <img src="images/home.png" alt="home" />
            </div>
            <div className="middle_section2_h1">YOUR OWN PAGE</div>
            <p>
              Create your own page with just one button. And then, it is only
              one in the world.
            </p>
          </li>
          <li>
            <div className="middle_section2_image">
              <img src="images/url2.png" alt="url" />
            </div>
            <div className="middle_section2_h1">PRIVATE DOMAIN</div>
            <p>
              If you want, you can also set url address. Express personality
              with the Url address.
            </p>
          </li>
        </ul>
      </SectionMiddle2>
    </section>
  );
}
