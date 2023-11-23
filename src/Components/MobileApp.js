import React, { useEffect } from "react";
import styled from "styled-components";
import phone1 from "../Assets/phone1.png";
import phone2 from "../Assets/phone2.png";
import phone3 from "../Assets/phone3.png";
import coinDCX from "../Assets/coinDCX.png";
import promotionbg from "../Assets/coinDCXbg.png";
import Delta from "../Assets/Delta.png";
import density from "../Assets/density-img.png";
import Aos from "aos";
import "aos/dist/aos.css";

const MobileApp = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Container>
        <div className="image-wrapper" data-aos="fade-up" data-aos-offset="200">
          <img src={phone1} alt="phone1" />
        </div>
        <div className="image-wrapper" data-aos="fade-up" data-aos-offset="200">
          <img src={phone2} alt="phone2" />
        </div>
        <div className="image-wrapper" data-aos="fade-up" data-aos-offset="200">
          <img src={phone3} alt="phone3" />
        </div>
      </Container>
      <Box data-aos="fade-up" data-aos-offset="200">
        <div>
          <h1>
            Trade More. <span>Pay Less.</span>
          </h1>
          <p>Our low Fees SuperCharge Your Profits</p>
        </div>
      </Box>
      <Sections data-aos="fade-up" data-aos-offset="200">
        <div className="promotion-wrapper">
          {/* <img src={coinDCX_bg} alt="coinDCX_bg" className="coinDCX_bg" /> */}
          <div className="wrapper"></div>
          <img src={coinDCX} alt="coinDCX" className="coinDCX" />
          <div className="details-wrapper1">
            <h2>0.025</h2>
            <p>MakerFees</p>
          </div>
          <div className="details-wrapper2">
            <h2>0.07</h2>
            <p>TakerFees</p>
          </div>
        </div>
        <div className="density-main-wrapper">
          <div className="wrapper"></div>
          <img src={density} alt="density" className="density-logo" />
          <div className="density-wrapper1">
            <h2>0.025</h2>
            <p>MakerFees</p>
          </div>
          <div className="density-wrapper2">
            <h2>0.07</h2>
            <p>TakerFees</p>
          </div>
        </div>
        <div className="promotion-wrapper">
          <div className="wrapper"></div>
          <img src={Delta} alt="coinDCX" className="coinDCX" />
          <div className="details-wrapper1">
            <h2>0.02</h2>
            <p>MakerFees</p>
          </div>
          <div className="details-wrapper2">
            <h2>0.05</h2>
            <p>TakerFees</p>
          </div>
        </div>
      </Sections>
    </>
  );
};

const Container = styled.div`
  padding: 120px, 0px, 240px, 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 120px;
  margin: 120px auto 100px;
`;

const Box = styled.div`
  margin: 150px auto 70px;
  h1 {
    font-size: 72px;
    line-height: 50px;
    letter-spacing: -2.1px;
    text-align: center;
    color: #ffffff;
    span {
      color: #ebff25;
    }
  }
  p {
    color: #e7e7ea;
    font-size: 24px;
    line-height: 0px;
    text-align: center;
    font-weight: 100;
  }
`;

const Sections = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 440px;
  width: 90vw;
  padding: 0px 40px;
  box-sizing: border-box;
  margin: 50px auto 100px;
  gap: 15px;
  .promotion-wrapper {
    height: 100%;
    width: 368px;
    position: relative;
    background-color: #19191d;
    .wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 284px;
      height: 239px;
      background-image: url(${promotionbg});
    }
    .coinDCX {
      position: absolute;
      top: 45px;
      left: 50%;
      transform: translateX(-50%);
    }
    .details-wrapper1 {
      position: relative;
      top: 110px;
      h2 {
        font-size: 32px;
        line-height: 30px;
        letter-spacing: -1.5px;
        text-align: center;
        color: #ffffff;
      }
      p {
        color: #ffffff;
        font-size: 20px;
        text-align: center;
        line-height: 0px;
        letter-spacing: -1px;
        opacity: 60%;
        font-weight: 300;
      }
    }
    .details-wrapper2 {
      position: relative;
      top: 170px;
      h2 {
        font-size: 32px;
        line-height: 30px;
        letter-spacing: -1.5px;
        text-align: center;
        color: #ffffff;
      }
      p {
        color: #ffffff;
        font-size: 20px;
        text-align: center;
        line-height: 0px;
        letter-spacing: -1px;
        opacity: 60%;
        font-weight: 300;
      }
    }
  }

  .density-main-wrapper {
    height: 100%;
    width: 368px;
    position: relative;
    // box-shadow: rgba(226, 255, 111, 1) 0px 2px 8px 0px;
    box-shadow: rgba(226, 255, 111, 0.8) 0px 7px 20px 0px;
    background-image: linear-gradient(
        to bottom left,
        rgba(218, 247, 96, 1),
        rgba(50, 216, 117, 0.96)
      ),
      url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHgxMTAwMzgxLWltYWdlLWpvYjYzMC1uXzEtbDBnMDdvdWUuanBn.jpg");
    .wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 284px;
      height: 239px;
      background-image: url(${promotionbg});
    }
    .density-logo {
      position: absolute;
      top: 15px;
      left: 50%;
      transform: translateX(-50%);
    }
    .density-wrapper1 {
      position: relative;
      top: 110px;
      h2 {
        font-size: 32px;
        line-height: 30px;
        letter-spacing: -1.5px;
        text-align: center;
      }
      p {
        font-size: 20px;
        text-align: center;
        line-height: 0px;
        letter-spacing: -1px;
        font-weight: 400;
        opacity: 70%;
      }
    }
    .density-wrapper2 {
      position: relative;
      top: 170px;
      h2 {
        font-size: 32px;
        line-height: 30px;
        letter-spacing: -1.5px;
        text-align: center;
      }
      p {
        font-size: 20px;
        text-align: center;
        line-height: 0px;
        letter-spacing: -1px;
        opacity: 70%;
      }
    }
  }
`;

export default MobileApp;
