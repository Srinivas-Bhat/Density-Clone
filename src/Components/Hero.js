import React, { useEffect } from "react";
import styled from "styled-components";
import mobile from "../Assets/mobile.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Container>
        <div className="title-wrapper" data-aos="zoom-in" data-aos-offset="200">
          <h1>
            It's time to trade, the <span>future</span>
          </h1>
          <p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
        </div>
        <div className="image-wrapper" >
          <img src={mobile} alt="mobile" />
        </div>
      </Container>
      <Box>
        <div className="one">
          <h1>00%</h1>
          <p>Conversion Fee</p>
        </div>
        <div className="two">
          <h1>500 Mn+</h1>
          <p>Lifetime Volume Traded</p>
        </div>
        <div className="three">
          <h1>250+</h1>
          <p>Total Tradable Pairs</p>
        </div>
        <div className="four">
          <h1>15,000+</h1>
          <p>Traders</p>
        </div>
      </Box>
    </>
  );
};

const Container = styled.div`
  // height: 98vh;
  padding: 60px 0 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title-wrapper {
    width: 750px;
    height: 270px;
    h1 {
      font-size: 96px;
      line-height: 90px;
      text-align: center;
      letter-spacing: -4.19px;
      font-weight: 700;
      color: #ffffff;
      span {
        font-size: inherit;
        background: linear-gradient(to right, #75fa39, #d5fa39);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    p {
      font-weight: 100;
      font-size: 24px;
      color: #e7e7ea;
      text-align: center;
    }
  }
  .image-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    top: 100px;
    background-image: radial-gradient(green 2%, black 60%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    img {
      width: 779px;
      height: 668px;
    }
  }
`;

const Box = styled.div`
  width: 1015px;
  height: 170px;
  box-shadow: #32d875 0px 2px 5px 0px;
  margin: 100px auto 60px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    height: 95px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 250px;
    h1 {
      font-size: 40px;
      color: rgba(235, 255, 37, 1);
      line-height: 0px;
    }
    p {
      font-weight: 50;
      font-size: 16px;
      line-height: 0px;
      color: rgba(169, 169, 169, 1);
    }
  }
  .one,
  .two,
  .three {
    border-right-width: 2.3px;
    border-top-width: 0px;
    border-left-width: 0px;
    border-bottom-width: 0px;
    border-style: solid;
    border-image: linear-gradient(
        to bottom,
        rgba(235, 255, 37, 0),
        rgba(235, 255, 37, 0.4),
        rgba(235, 255, 37, 0)
      )
      1;
  }
`;

export default Hero;
