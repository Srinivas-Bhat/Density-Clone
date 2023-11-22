import React, { useEffect } from "react";
import styled from "styled-components";
import mittal from "../Assets/mittal.png";
import bhule from "../Assets/bhule.png";
import vasman from "../Assets/vasman.png";
import linkedin from "../Assets/linkedin.png";
import texturebg from "../Assets/texturebg.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Visionaries = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const founders = [
    { name: "Aakash Neeraj Mittal", role: "CEO, Density", image: mittal },
    { name: "Bhupendra Bule", role: "CTO, Density", image: bhule },
    { name: "Deepak Vasman", role: "CBO, Density", image: vasman },
  ];

  return (
    <Container>
      <div className="description-wrapper" data-aos="fade-up" data-aos-offset="200">
        <h1>
          Meet the <span>Visionaries</span> behind Density
        </h1>
      </div>
      <div className="flex-container" data-aos="fade-up" data-aos-offset="250">
        {founders.map((item) => (
          <div className="visionaries" key={item.name}>
            <div className="wrapper"></div>
            <div className="person-details">
              <h2>{item.name}</h2>
              <p>{item.role}</p>
            </div>
            <img src={item.image} alt={item.name} className="expert-image" />
            <img src={linkedin} alt="linkedIn" className="linkedin" />
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(25, 25, 29, 1) !important;
  height: 876px;
  width: 1446px;
  margin: auto;

  .description-wrapper {
    width: 775px;
    margin: auto;
    box-sizing: border-box;
    padding: 30px 0 10px;
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
  }

  .flex-container {
    width: 1126px;
    height: 450px;
    gap: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 64px auto 0;
    .visionaries {
      width: 323px;
      height: 360px;
      background-color: #32333a;
      position: relative;
      .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(${texturebg});
        width: 279px;
        height: 239px;
        opacity: 55%;
      }
      .person-details {
        width: 239px;
        position: absolute;
        top: 39px;
        left: 30px;

        h2 {
          font-size: 32px;
          font-weight: 700;
          line-height: 29px;
          letter-spacing: -1px;
          color: #fff;
        }
        p {
          font-size: 18px;
          font-weight: 400;
          line-height: 19px;
          color: rgba(187, 187, 195, 1);
        }
      }
      .expert-image {
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .linkedin {
        position: absolute;
        left: 23px;
        bottom: 29px;
        cursor: pointer;
      }
    }
  }
`;

export default Visionaries;
