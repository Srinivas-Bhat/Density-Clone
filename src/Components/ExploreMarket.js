import React, { useEffect } from "react";
import styled from "styled-components";
import graph from "../Assets/graph.png";
import unlock_graph from "../Assets/unlock_graph.png";
import Aos from "aos";
import "aos/dist/aos.css";



const ExploreMarket = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container  >
      <div className="description-wrapper" data-aos="fade-up" data-aos-offset="200">
        <h1>
          Explore the Markets like it is your <span>Playground.</span>
        </h1>
        <p>Search for your favorite coins and stay ahead of the market</p>
      </div>
      <div className="graph-wrapper" data-aos="fade-up" data-aos-offset="250">
        <img src={graph} alt="graph" />
      </div>
      <Button>Explore Markets</Button>
      <div className="unlock-fronters-wrapper" data-aos="fade-up" data-aos-offset="200">
        <div class="unlock-description">
          <h1>
            <span>Unlock</span> New Frontiers.
          </h1>
          <p>
            Are you a stock trader looking for new opportunities to make money? We got you
            covered!
          </p>
        </div>
        <div className="unlock-features">
          <div>
            <h2>Same Strategies</h2>
          </div>
          <div>
            <h2>Same Indicators</h2>
          </div>
          <div>
            <h2>Same Leverage</h2>
          </div>
          <div>
            <h2>24x7 Trading</h2>
          </div>
        </div>
      </div>
      <div className="unlock-graph-wrapper" data-aos="fade-up" data-aos-offset="200">
        <img src={unlock_graph} alt="unlock-graph" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 150px auto;
  .description-wrapper {
    width: 850px;
    margin: auto;
    h1 {
      color: #fff;
      font-size: 72px;
      letter-spacing: -2.1px;
      line-height: 76.88px;
      text-align: center;
      span {
        color: #ebff25;
      }
    }
    p {
      color: #e7e7ea;
      font-size: 22px;
      line-height: 5px;
      text-align: center;
      font-weight: 400;
    }
  }
  .graph-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1134px;
    height: 670px;
    margin: 64px auto;
  }

  .unlock-fronters-wrapper {
    padding-top: 60px;
    .unlock-description {
      width: 850px;
      margin: 0 auto 40px;
      h1 {
        color: #fff;
        font-size: 72px;
        letter-spacing: -2.1px;
        line-height: 76.88px;
        text-align: center;
        span {
          color: #ebff25;
        }
      }
      p {
        width: 660px;
        margin: auto;
        color: #e7e7ea;
        font-size: 22px;
        text-align: center;
        font-weight: 400;
      }
    }
    .unlock-features {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1140px;
      height: 170px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.25);
      margin: 60px auto 0;
      div {
        width: 285px;
        height: 76px;
        border-right: 1px solid rgba(169, 169, 169, 1);
        h2 {
          width: 160px;
          text-align: center;
          margin: auto;
          color: #fff;
          font-size: 30px;
          line-height: 38px;
        }
      }
      div:last-child {
        border: none !important;
      }
    }
  }
  .unlock-graph-wrapper {
    height: 510px;
    width: 1130px;
    padding-top: 70px;
    margin: 0px auto 90px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  border-radius: 8px;
  height: 48px;
  width: 265px;
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

export default ExploreMarket;
