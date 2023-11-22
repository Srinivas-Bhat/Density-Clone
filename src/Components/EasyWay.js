import React, { useEffect } from "react";
import styled from "styled-components";
import speaker from "../Assets/speaker.png";
import tag from "../Assets/tag.png";
import coinDCXbg from "../Assets/coinDCXbg.png";
import coin from "../Assets/coin.png";
import person from "../Assets/person.png";
import Aos from "aos";
import "aos/dist/aos.css";

const EasyWay = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const referEarn = [
    { title: "Share your referral link", image: tag },
    { title: "Invite Friends to Trade on Density", image: person },
    { title: "Trade and Earn", image: coin },
  ];
  const stats = [
    { title: "10,000+", des: "Traders" },
    { title: "100Mn", des: "Daily Volume Traded" },
    { title: "Daily", des: "Trade Analysis" },
    { title: "Live", des: "Signals" },
  ];
  return (
    <>
      <Container>
        <div className="description-wrapper" data-aos="fade-up" data-aos-offset="200">
          <img src={speaker} alt="speaker" />
          <h1>
            Earn Money. <span>The Easy Way.</span>
          </h1>
          <p>No Complexity of Trading Fee, generate volume and win</p>
        </div>
        <div className="flex-section-wrapper">
          {referEarn.map((item, index) => (
            <div
              className="flex-container"
              key={index + item.title}
              data-aos="fade-up"
              data-aos-offset="250"
            >
              <div className="wrapper"></div>
              <img src={item.image} alt="tag" />
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
        <Button>START EARNING NOW</Button>
      </Container>
      <ImageContainer>
        <div className="description-wrapper" data-aos="fade-up" data-aos-offset="250">
          <h1>
            Trade Together. <span>Thrive Together.</span>
          </h1>
          <p>Join the fun-filled community on our platform.</p>
        </div>
        <div className="flex-container" data-aos="fade-up" data-aos-offset="250">
          {stats.map((item, index) => (
            <div key={index + item.title}>
              <h2>{item.title}</h2>
              <p>{item.des}</p>
            </div>
          ))}
        </div>
        <Button>Join Community</Button>
      </ImageContainer>
    </>
  );
};

const Container = styled.div`
  padding: 90px 0 80px;
  background-color: #000 !important;
  .description-wrapper {
    margin: auto;
    padding-bottom: 50px;
    img {
      width: 247px;
      height: 228px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h1 {
      font-size: 72px;
      line-height: 76px;
      letter-spacing: -2.1px;
      text-align: center;
      color: #fff;
      span {
        color: rgba(235, 255, 37, 1);
      }
    }
    p {
      color: rgba(231, 231, 234, 1);
      font-size: 24px;
      line-height: 32px;
      text-align: center;
    }
  }

  .flex-section-wrapper {
    display: flex;
    padding-bottom: 70px;
    justify-content: center;
    align-items: center;
    gap: 15px;
    .flex-container {
      height: 323px;
      width: 323px;
      background-color: rgba(25, 25, 29, 1);
      position: relative;
      .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(${coinDCXbg});
        width: 279px;
        height: 239px;
        opacity: 55%;
      }
      img {
        position: absolute;
        width: 103px;
        height: 90px;
        top: 33px;
        left: 30px;
      }
      h2 {
        position: absolute;
        top: 204px;
        left: 28px;
        font-size: 30px;
        line-height: 40px;
        letter-spacing: -1px;
        color: #fff;
      }
    }
  }
`;

const ImageContainer = styled.div`
  width: 1446px;
  height: 800px;
  margin: auto;
  background-image: linear-gradient(rgba(0, 0, 0, 0.467), rgba(0, 0, 0, 0.4)),
    url("https://cdn.vanguardngr.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-26-at-2.05.23-PM.jpeg");
  background-size: cover;
  background-repeat: no-repeat;

  .description-wrapper {
    margin: auto;
    box-sizing: border-box;
    padding: 80px 0 70px;
    h1 {
      font-size: 70px;
      line-height: 76px;
      letter-spacing: -2.1px;
      text-align: center;
      color: #fff;
      span {
        color: rgba(235, 255, 37, 1);
      }
    }
    p {
      text-align: center;
      font-size: 24px;
      line-height: 2px;
      font-weight: 400;
      color: rgba(231, 231, 234, 1);
    }
  }

  .flex-container {
    border: 1px solid rgba(255, 255, 255, 0.25);
    background-color: rgba(16, 16, 16, 0.5);
    width: 1140px;
    height: 170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 2px;
    margin: 20px auto 80px;
    box-sizing: border-box;
    div {
      width: 285px;
      height: 68px;
      border-right: 1px solid rgba(169, 169, 169, 1);
      h2 {
        width: 160px;
        text-align: center;
        margin: auto;
        color: #fff;
        font-size: 30px;
        line-height: 40px;
      }
      p {
        text-align: center;
        font-size: 16px;
        line-height: 6px;
        font-weight: 400;
        color: rgba(169, 169, 169, 1);
      }
    }
    div:last-child {
      border: none !important;
    }
  }
`;

const Button = styled.button`
  border-radius: 8px;
  height: 48px;
  width: 295px;
  padding: 24px 48px 24px 48px;
  background-image: linear-gradient(to right, #d4f938, #32d875);
  border: none;
  font-size: 18px;
  font-weight: 700;
  margin: 35px auto 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(3px 3px 3px #a8ef9c);
  border: 1.5px solid #a8ef9c;
`;

export default EasyWay;
