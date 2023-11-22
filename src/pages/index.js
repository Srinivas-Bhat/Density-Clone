import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import MobileApp from "../Components/MobileApp";
import ExploreMarket from "../Components/ExploreMarket";
import StartWithUs from "../Components/StartWithUs";
import Founder from "../Components/Founder";
import Testimonials from "../Components/Testimonials";
import EasyWay from "../Components/EasyWay";
import Visionaries from "../Components/Visionaries";
import StartNow from "../Components/StartNow";
import Footer from "../Components/Footer";
import ThreeSteps from "../Components/ThreeSteps";
import "../styles/global.css";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Density";
  }, []);

  return (
    <Container>
      <Navbar />
      <Hero />
      <MobileApp />
      <ExploreMarket />
      <StartWithUs />
      {/* some other component comes here */}
      <ThreeSteps />
      <Founder />
      <Testimonials />
      <EasyWay /> {/* Easy money the easy way section */}
      <Visionaries />
      <StartNow />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background-color: #000 !important;
`;

export default LandingPage;
