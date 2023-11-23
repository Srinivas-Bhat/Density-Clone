import React, { useEffect } from "react";
import styled from "styled-components";
import coinDCXbg from "../Assets/coinDCXbg.png";
import prakash from "../Assets/prakash.png";
import nayak from "../Assets/nayak.png";
import expert_arjun from "../Assets/expert_arjun.png";
import Aos from "aos";
import "aos/dist/aos.css";


const Testimonials = () => {


  useEffect(() => {
    Aos.init();
  }, []);

  const testimony = [
    {
      name: "Prakash Jamatia",
      note: "As someone who's always looking for the next big thing, I was really excited to try out Density’s crypto futures trading platform. And I have to say, it definitely lived up to my expectations.",
      role: "Founder, Tradeshala",
      image: prakash,
    },
    {
      name: "Shambhavi Nayak.",
      note: "I'm not a seasoned trader, but this website has made it easy for me to get started with crypto futures trading. Their KYC was very fast and the educational resources were really helpful.",
      role: "Commodity Trader",
      image: nayak,
    },
    {
      name: "Arjun Naik.",
      note: "I've been using this platform for a few months now and it's been a great experience. I was delighted to see all the major crypto coins listed on Density Exchange.",
      role: "Equity Trader",
      image: expert_arjun,
    },
  ];
  return (
    <>
      <Container>
        <div className="title-wrapper" data-aos="fade-up" data-aos-offset="200">
          <h1>Don't take our word for it.</h1>
          <p>
            Hear it from our expert community of traders who have made insane amounts in a
            short amount of time
          </p>
        </div>
        <div className="testimonial-container" data-aos="fade-up" data-aos-offset="250">
          {testimony.map((item, index) => (
            <div className="testimony" key={index + item.name}>
              <div className="wrapper"></div>
              <div className="experts">
                <p>{item.note}</p>
                <h3>{item.name}</h3>
                <h6>{item.role}</h6>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="expert-image"
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #fff !important;
  padding-bottom: 80px;
  .title-wrapper {
    width: 100vw;
    // padding: 0 80px;
    height: 167px;
    margin: auto;
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 72px;
      line-height: 6px;
      letter-spacing: -2.1px;
      text-align: center;
    }
    p {
      text-align: center;
      width: 659px;
      font-size: 22px;
      line-height: 32px;
      font-weight: 400;
      color: rgba(50, 51, 58, 1);
    }
  }

  .testimonial-container {

    width: 100vw;
    height: 450px;
    gap: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 64px 0px 0;
    box-sizing: border-box;
    .testimony {
    overflow-x: hidden;

      width: 360px;
      height: 450px;
      background-color: rgba(243, 243, 243, 1);
      position: relative;
      .wrapper {
        position: absolute;
        top: 0;
        right: 0;
        background-image: url(${coinDCXbg});
        width: 304px;
        height: 272px;
        opacity: 55%;
      }
      .experts {
        width: 303px;
        height: 196px;
        position: absolute;
        top: 40px;
        left: 29px;

        p {
          font-size: 18px;
          line-height: 28px;
          color: rgba(102, 102, 115, 1);
        }
        h3 {
          font-size: 28px;
          font-weight: 700;
          line-height: 29px;
          letter-spacing: -1px;
          position: absolute;
          top: 235px;
          width: 109px;
          height: 60px;
        }
        h6 {
          font-size: 16px;
          font-weight: 500;
          line-height: 19px;
          position: absolute;
          top: 290px;
          color: rgba(102, 102, 115, 1)
        }
      }
      .expert-image {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
`;

export default Testimonials;

