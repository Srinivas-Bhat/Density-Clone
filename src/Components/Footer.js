import React from "react";
import styled from "styled-components";
import whiteLogo from "../Assets/whiteLogo.png";
import instagram from "../Assets/instagram.png";
import facebook from "../Assets/facebook.png";
import linkeIn from "../Assets/linkeIn.png";
import twitter from "../Assets/twitter.png";

const Footer = () => {
  const footerItems = [
    "Blogs",
    "Fees",
    "Leaderboard",
    "Careers",
    "Contact Us",
    "Privacy Policy",
  ];
  return (
    <Container>
      <img src={whiteLogo} alt="whiteLogo" className="whiteLogo" />
      <div className="flex-wrapper">
        {footerItems.map((item) => (
          <p key="item">{item}</p>
        ))}
      </div>
      <p className="description">
        Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel
        när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga
        poddradio har un mad och inde.{" "}
      </p>
      <div className="icon-wrapper">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={linkeIn} alt="linkeIn" />
        <img src={instagram} alt="instagram" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 40px;
  box-sizing: border-box;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  background-color: rgba(34, 152, 81, 1);
  align-items: center;
  .whiteLogo {
    padding-top: 60px;
    width: 127px;
    height: 29px;
    margin: auto;
  }
  .flex-wrapper {
    width: 780px;
    height: 93px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    p {
      font-size: 15px;
      line-height: 12px;
      color: rgba(255, 255, 255, 1);
      cursor: pointer;
      &:hover {
        color: #ebff25;
      }
    }
  }
  .description {
    width: 826px;
    height: 48px;
    font-size: 15px;
    line-height: 24px;
    color: rgba(221, 221, 221, 1);
    text-align: center;
  }

  .icon-wrapper {
    width: 200px;
    height: 32px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;

export default Footer;
