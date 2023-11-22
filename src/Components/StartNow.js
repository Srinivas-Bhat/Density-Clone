import React, { useEffect } from "react";
import styled from "styled-components";
import mobileApp from "../Assets/mobileApp.png";
import Aos from "aos";
import "aos/dist/aos.css";

const StartNow = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container>
      <div className="content-wrapper" data-aos="fade-up" data-aos-offset="250">
        <h1>Get started now.</h1>
        <img src={mobileApp} alt="MobileApp" className="mobileApp" />
        <button>Start Trading!</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #000 !important;
  width: 1446px;
  margin: auto;
  padding: 110px 0 180px 0;

  .content-wrapper {
    width: 1011px;
    height: 1228.58px;
    margin: auto;
    border: 1px solid black;
    position: relative;
    h1 {
      font-size: 120px;
      line-height: 158px;
      letter-spacing: -2.6px;
      text-align: center;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .mobileApp {
      width: 544px;
      height: 1109.05px;
      position: absolute;
      top: 183px;
      left: 50%;
      transform: translate(-50%);
    }
    button {
      height: 140px;
      width: 875px;
      padding: 16px 32px;
      background-image: linear-gradient(
        to right,
        rgba(50, 216, 117, 1),
        rgba(212, 249, 56, 1)
      );
      border: none;
      font-size: 38px;
      font-weight: 700;
      line-height: 45px;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      top: 1085px;
      cursor: pointer;
      border-radius: 8px;
    }
  }
`;

export default StartNow;
