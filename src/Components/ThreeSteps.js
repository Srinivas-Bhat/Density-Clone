import React, { useEffect } from "react";
import styled from "styled-components";
import step1 from "../Assets/step1.png";
import step3 from "../Assets/step3.png";
import step2 from "../Assets/step2.png";
import account from "../Assets/account.png";
import fundCoin from "../Assets/fundCoin.png";
import tradeGraph from "../Assets/tradeGraph.png";
import Aos from "aos";
import "aos/dist/aos.css";

const ThreeSteps = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const steps = [
    {
      title: "Create an Account",
      des: "Register & Complete your Verification in less than 2 minutes",
      mobileImg: step1,
      icon: account,
    },
    {
      title: "Deposit Funds",
      des: "Add funds quickly using a variety of payment methods",
      mobileImg: step2,
      icon: fundCoin,
    },
    {
      title: "Become a Trader",
      des: "Choose Your Trading Pair & Trade Seamlessly",
      mobileImg: step3,
      icon: tradeGraph,
    },
  ];

  return (
    <Container>
      <div className="title-wrapper" data-aos="fade-up" data-aos-offset="200">
        <h1>
          Derivates made simple in <span>3 Easy</span> Steps{" "}
        </h1>
      </div>
      <div className="steps-container">
        {steps.map((item, index) => (
          <div
            className="flex-container"
            key={item.title}
            style={{ border: index === 2 && "none" }}
             data-aos="fade-up" data-aos-offset="250"
          >
            <img src={item.mobileImg} alt={item.title} className="step1-mobile" />
            <div className="step-description">
              <img src={item.icon} alt="icon" className="account" />
              <h3>{item.title}</h3>
              <p>{item.des}</p>
              <button>Trade Now</button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #000 !important;
  width: 1446px;
  margin: auto;
  .title-wrapper {
    width: 936px;
    margin: auto;
    padding: 20px 0;
    box-sizing: border-box;
    h1 {
      font-size: 72px;
      line-height: 80px;
      letter-spacing: -2.1px;
      text-align: center;
      color: rgba(255, 255, 255, 1);
      span {
        color: rgba(235, 255, 37, 1);
      }
    }
  }

  .steps-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .flex-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0 35px;
      box-sizing: border-box;
      border-bottom-width: 1.3px;
      border-top-width: 0px;
      border-left-width: 0px;
      border-right-width: 0px;
      border-style: solid;
      border-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0)
        )
        1;
      .step1-mobile {
        height: 645px;
        width: 645px;
        object-fit: scale-down;
      }
      .step-description {
        width: 384px;
        height: 342px;
        .account {
          width: 120px;
          height: 120px;
        }
        h3 {
          margin: 5px 0 15px;
          font-size: 40px;
          line-height: 48px;
          color: rgba(255, 255, 255, 1);
          font-weight: 500;
          letter-spacing: -2px;
        }
        p {
          margin-top: 0;
          font-size: 20px;
          line-height: 32px;
          color: rgba(169, 169, 169, 1);
        }
        button {
          margin-top: 12px;
          height: 48px;
          width: 216px;
          background-image: linear-gradient(
            to right,
            rgba(50, 216, 117, 1),
            rgba(212, 249, 56, 1)
          );
          border: none;
          font-size: 18px;
          font-weight: 700;
          line-height: 21px;
          cursor: pointer;
          border-radius: 8px;
        }
      }
    }
  }
`;

export default ThreeSteps;
