import React, { useEffect } from "react";
import styled from "styled-components";
import coinDCXbg from "../Assets/coinDCXbg.png";
import percent from "../Assets/percent.png";
import Manager from "../Assets/Manager.png";
import Aos from "aos";
import "aos/dist/aos.css";

const StartWithUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container>
      <div className="description-wrapper" data-aos="fade-up" data-aos-offset="150">
        <h1>Start Small. Earn Big.</h1>
        <p>
          Deposit a minimum of 1000 and get a Deposit bonus + dedicated relationship
          manager
        </p>
      </div>
      <div className="benifits-wrapper" data-aos="fade-up" data-aos-offset="200">
        <div className="flex-container">
          <div className="grid-container">
            <img src={percent} alt="percentage" />
            <div></div>
          </div>
          <div className="description-wrapper">
            <h1>Deposit Bonus.</h1>
            <p>
              Our assets' liquidity is unmatched in the market, with a small bid-ask
              spread and a well-balanced order book.
            </p>
          </div>
        </div>
        <div className="flex-container">
          <div className="grid-container">
            <img src={Manager} alt="Manager" />
            <div></div>
          </div>
          <div className="description-wrapper">
            <h1>Dedicated Manager.</h1>
            <p>
              Our assets' liquidity is unmatched in the market, with a small bid-ask
              spread and a well-balanced order book.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff !important;
  padding: 120px 50px;
  box-sizing: border-box;
  .description-wrapper {
    // width: 100vw;
    height: 167px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding-bottom: 91px;
    box-sizing: border-box;
    h1 {
      font-size: 72px;
      letter-spacing: -2.1px;
      line-height: 36px;
    }
    p {
      margin-top: 0px;
      width: 660px;
      text-align: center;
      font-size: 22px;
      line-height: 32px;
      font-weight: 400;
      color: rgba(50, 51, 58, 1);
    }
  }
  .benifits-wrapper {
    display: flex;
    // width: 100vw;
    height: 450px;
    gap: 20px;
    padding: 0 80px;
    margin: auto;
    justify-content: center;
    align-items: center;
    .flex-container {
      width: 553px;
      height: 100%;
      position: relative;
      background-color: rgba(243, 243, 243, 1);
      .grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        img {
          width: 185px;
          height: 117px;
          position: absolute;
          top: 52px;
          left: 43px;
        }
        div {
          width: 304px;
          height: 272px;
          opacity: 55%;
          background-image: url(${coinDCXbg});
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .description-wrapper {
        position: absolute;
        max-width: 90%;
        top: 230px;
        left: 29px;
        h1 {
          width: 175px;
          font-size: 40px;
          line-height: 50px;
          letter-spacing: -1.5px;
          align-self: flex-start;
        }
        p {
          // width: 424px;
          width: 100%;
          font-size: 15px;
          line-height: 20px;
          font-weight: 400;
          text-align: left !important;
        }
      }
    }
  }
`;

export default StartWithUs;
