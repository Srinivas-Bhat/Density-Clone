import React from "react";
import styled from "styled-components";
import orios from "../Assets/orios.png";
import iseed from "../Assets/iseed.png";
import perpetual from "../Assets/perpetual.png";
import inflection from "../Assets/inflection.png";
import rise from "../Assets/rise.png";
import tribe from "../Assets/tribe.png";
import polygon from "../Assets/polygon.png";
import utsav from "../Assets/utsav.png";
import aditya from "../Assets/aditya.png";
import arjun from "../Assets/arjun.png";
import sajid from "../Assets/sajid.png";
import gokul from "../Assets/gokul.png";
import sandeep from "../Assets/sandeep.png";
import kunal from "../Assets/kunal.png";
import karn from "../Assets/karn.png";

const Founder = () => {
  return (
    <>
      <Container>
        <h1>Backend by the Best.</h1>
        <div className="company-image-wrapper">
          <img src={orios} alt="orios" />
          <img src={inflection} alt="inflection" />
          <img src={iseed} alt="iseed" />
          <img src={perpetual} alt="perpetual" />
          <img src={rise} alt="rise" />
          <img src={tribe} alt="tribe" />
          <img src={polygon} alt="polygon" />
        </div>
        <div className="founders-wrapper">
          <img src={utsav} alt="utsav" />
          <img src={aditya} alt="aditya" />
          <img src={gokul} alt="gokul" />
          <img src={sajid} alt="sajid" />
          <img src={arjun} alt="arjun" />
          <img src={kunal} alt="kunal" />
          <img src={sandeep} alt="sandeep" />
          <img src={karn} alt="karn" />
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding-top: 100px;
  background-color: #000 !important;
  h1 {
    font-size: 72px;
    line-height: 76px;
    letter-spacing: -2.1px;
    text-align: center;
    color: #fff;
    padding-bottom: 50px;
  }
  .company-image-wrapper {
    width: 950px;
    height: 300px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 40px;
    gap: 80px;
    img {
      object-fit: scale-down;
    }
  }
  .founders-wrapper {
    width: 1014px;
    // height: 460px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px auto 40px;
    gap: 50px;
    padding-bottom: 60px;
    img {
      object-fit: contain;
    }
  }
`;

export default Founder;



