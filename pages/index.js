import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import css from "styled-jsx/css";
import ZapierForm from "react-zapier-form";
import * as Scroll from "react-scroll";
const style = css`
  #wrap {
    position: relative;
    min-width: 720px;
    height: auto;
    margin: 0 auto;
  }
  /* header */
  header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 5px 50px 5px 50px;
    background-color: black;
    font-size: 22px;
    font-family: "Raleway", sans-serif;
    z-index: 1000;
  }
  header .logo_box {
    color: white;
    margin-top: 2px;
  }
  header .logo {
    position: relative;
    display: block;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.3rem;
  }
  header ul {
    display: flex;
    height: 100%;
    align-items: center;
  }
  header nav a li {
    font-size: 21px;
    line-height: 70px;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
  header nav a li:hover {
    color: #c34f75;
    cursor: pointer;
  }
  header nav a + a {
    margin-left: 80px;
  }
  /* main */
  main {
    font-family: "Raleway", sans-serif;
  }
  .top_wrap {
    position: relative;
  }
  .topImage {
    width: 100%;
  }
  .topOverlay {
    position: absolute;
    bottom: 23%;
    left: 46%;
    border: 10px double white;
    border-radius: 20%;
    cursor: pointer;
  }
  .topOverlay:hover {
    border: 10px double #c34f75;
  }
  .topOverlay:hover div {
    color: #c34f75;
  }
  .topOverlay div {
    font-size: 40px;
    color: white;
    font-weight: bold;
  }
  .middle {
    position: relative;
    width: 100%;
    background-color: #f5f5f5;
  }

  .middle_section1 {
    position: relative;
    top: -65px;
    font-family: montserrat;
    overflow-x: hidden;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    background: #1e2134;

    line-height: 1.7;
    color: #fff;
    z-index: 100;
    transform: skewY(5deg);
  }
  .bg-text-container {
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
  .animate-text {
    animation: text-scrolling 20s linear infinite;
    will-change: transform;
    display: block;
    position: relative;
    white-space: nowrap;
  }
  .left {
    animation-direction: reverse;
  }
  span {
    font-size: 280px;
    color: transparent;
    -webkit-text-stroke: 2px #30442a;
    text-transform: uppercase;
    display: inline-block;
    line-height: 0.75;
    min-width: auto;
    font-weight: 800;
  }
  .container {
    padding: 30px;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }
  .container .col {
    max-width: 600px;
    margin: 0;
  }

  .container h1 {
    font-size: 90px;
    margin: 0;
  }
  p {
    font-size: 18px;
    font-weight: 200;
    margin: 0;
  }
  .middle_section2 {
    position: relative;
    background-color: black;
    top: -140px;
    width: 100%;
  }
  .middle_section2 h1 {
    padding-top: 140px;
    color: white;
    text-align: center;
    font-size: 60px;
    letter-spacing: 0.3rem;
    font-family: "Raleway", sans-serif;
  }
  .middle_section2 ul {
    padding-top: 50px;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
  }
  .middle_section2 ul li {
    position: relative;
    width: 300px;
    height: 380px;
    background-color: #f5f5f5;
    border-radius: 10%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .middle_section2 ul li:hover {
    transform: scale(1.1);
  }
  .middle_section2 ul li:hover p {
    color: black;
  }
  .middle_section2 ul li + li {
    margin-left: 80px;
  }
  .middle_section2_image {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 25%;
    top: -10%;
  }
  .middle_section2_h1 {
    text-align: center;
    color: #c34f75;
    font-size: 26px;
    font-weight: bold;
    padding-top: 130px;
  }
  .middle_section2 li p {
    text-align: center;
    font-size: 20px;
    padding: 20px 40px 40px 40px;
    color: gray;
    line-height: 30px;
  }
  /* zapierform */
  .bottom_wrap {
    background: paleturquoise;
    width: 100%;
    /* padding: 100px; */
    height: 460px;
    position: relative;
  }
  .bottom_form {
    position: absolute;
    top: -140px;
    width: 100%;
    height: 600px;
    /* height: 100%; */
    padding: 0 250px 0 250px;
    background: #f2f2f2;
  }
  .bottom_form .in_wrap {
    height: 100%;
    display: flex;
    padding: 128px 0;
    justify-content: space-between;
  }
  .bottom_form .in_wrap > div {
    width: 50%;
  }
  .bottom_form .section_title {
    font-weight: bold;
    font-size: 24px;
  }
  .bottom_form .txt_box {
    max-width: 426px;
  }
  .bottom_form .txt_box .section_title {
    margin-bottom: 42px;
  }
  .bottom_form .txt_box .txt {
    font-size: 17px;
    line-height: 32px;
    color: #000;
    font-weight: 300;
    max-width: 333px;
  }
  .bottom_form .input_box {
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    justify-content: space-between;
    max-width: 468px;
  }
  .bottom_form .input_box .inp {
    width: 100%;
    border: 1px solid #a1a1a1;
    border-radius: 9px;
    margin-bottom: 15px;
    padding: 14px 20px;
    font-weight: 400;
    font-size: 15px;
    color: #232323;
  }
  .bottom_form .input_box textarea {
    height: 150px;
    box-sizing: border-box;
    font-weight: 500;
    font-family: "Roboto";
  }
  .bottom_form .input_box textarea::placeholder {
    font-weight: 300;
  }
  .bottom_form .input_box .inp.name_input {
    max-width: 225px;
  }
  .bottom_form .input_box .submit_btn {
    padding: 17px;
    background: #a1a1a6;
    color: #f2f2f2;
    font-family: Archivo;
    font-weight: 500;
    width: 225px;
    border: none;
    cursor: pointer;
  }
  .bottom_form .input_box .inp::placeholder {
    color: #696969;
    font-weight: 300;
  }
  .bottom_form .input_box .inp:focus {
    border-color: #941649;
  }
  .ani {
    opacity: 0;
    transform: translateY(70px);
    transition: all 0.7s;
    transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
  }
  footer {
    padding: 10px 150px 10px 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  footer .logo_box {
    display: flex;
  }
  footer .logo_box h1 {
    margin-left: 10px;
  }
  footer .copyRight {
    display: flex;
  }
  footer .copyRight p {
    margin-left: 10px;
  }
  footer .reference {
    display: flex;
  }
  footer .reference p {
    margin-left: 10px;
  }
`;

export default function Home() {
  useEffect(() => {
    let parent = document.querySelectorAll(".animate-text");
    for (let i = 0; i < parent.length; i++) {
      parent[i].style.width = parent[i].children[0].clientWidth + "px";
    }
  }, []);
  const handleContact = (e) => {
    window.scrollTo({ top: 2020, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx>{style}</style>
      <div id="wrap">
        <header className="fixed">
          <a href="/">
            <div className="logo_box">
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
          <nav>
            <ul>
              <a href="/">
                <li>MAKE NOW</li>
              </a>
              <a onClick={handleContact}>
                <li>CONTACT</li>
              </a>
            </ul>
          </nav>
        </header>

        <main>
          <section className="top">
            <div className="top_wrap">
              <img
                className="topImage"
                src="images/topImage.gif"
                alt="topImage"
              />
              <div className="topOverlay">
                <a href="/">
                  <div>START</div>
                </a>
              </div>
            </div>
          </section>

          <section className="middle">
            <div className="middle_section1">
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
                    Don't you need a portfolio? You can create your own
                    portfolio page without the help of a developer.Try making it
                    right now. Maybe it can change your life.
                  </p>
                </div>
              </div>
            </div>

            <div className="middle_section2">
              <h1>We Provide</h1>
              <ul>
                <li>
                  <div className="middle_section2_image">
                    <img src="images/pallete.png" alt="pallete" />
                  </div>
                  <div className="middle_section2_h1">DIY EDITTING</div>
                  <p>
                    You can make it by yourself without the help of an expert.
                    Also, You can fix it at any time.
                  </p>
                </li>
                <li>
                  <div className="middle_section2_image">
                    <img src="images/home.png" alt="home" />
                  </div>
                  <div className="middle_section2_h1">YOUR OWN PAGE</div>
                  <p>
                    Create your own page with just one button. And then, it is
                    only one in the world.
                  </p>
                </li>
                <li>
                  <div className="middle_section2_image">
                    <img src="images/url2.png" alt="url" />
                  </div>
                  <div className="middle_section2_h1">PRIVATE DOMAIN</div>
                  <p>
                    If you want, you can also set url address. Express
                    personality with the Url address.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className="bottom">
            <div className="bottom_wrap">
              <ZapierForm action="https://hooks.zapier.com/hooks/catch/10152897/bo2afmy/">
                {({ error, loading, success }) => {
                  return (
                    <div>
                      <div className="bottom_form" id="contact">
                        <div className="in_wrap">
                          <div>
                            <div className="txt_box">
                              <p className="section_title">
                                Feel free to contact us.
                                <br />
                                We'll give a help.
                              </p>
                              <div className="txt">
                                <p>Let's make something amazing together.</p>
                                <p>
                                  If you're interested in creating any kind of
                                  page, please complete the form.
                                </p>
                              </div>
                            </div>
                          </div>
                          {!success && !loading && (
                            <div>
                              <div className="input_box">
                                <input
                                  type="text"
                                  placeholder="First Name *"
                                  name="firstName"
                                  className="name_input inp"
                                  required
                                />
                                <input
                                  type="text"
                                  placeholder="Last Name *"
                                  name="lastName"
                                  className="name_input inp"
                                  required
                                />
                                <input
                                  type="text"
                                  placeholder="Purpose *"
                                  name="Purpose"
                                  className="inp"
                                  required
                                />
                                <input
                                  type="text"
                                  placeholder="Email Address *"
                                  name="email"
                                  className="inp"
                                  required
                                />
                                <textarea
                                  rows={3}
                                  placeholder="Describe how we could help (Optional)"
                                  className="inp"
                                  name="describe"
                                ></textarea>
                                <input
                                  type="submit"
                                  value="SUBMIT"
                                  name="submit"
                                  className="submit_btn inp"
                                />
                              </div>
                            </div>
                          )}
                          {success && alert("성공!")}
                        </div>
                      </div>
                    </div>
                  );
                }}
              </ZapierForm>
            </div>
          </section>
        </main>
        <footer>
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
        </footer>
      </div>
    </>
  );
}
