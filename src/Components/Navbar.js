import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <Bar>
      <img src={logo} alt="density-logo" style={{cursor: "pointer"}} />
      <MainNav>
        <NavLi>
          <NavLi href="#">Career</NavLi>
        </NavLi>
        <NavLi>
          <NavLi href="#">Blogs</NavLi>
        </NavLi>
        <NavLi>
          <NavLi href="#">Leaderboard</NavLi>
        </NavLi>
        <NavLi>
          <NavLi href="#">Fees</NavLi>
        </NavLi>
        <Button>TRADE NOW</Button>
      </MainNav>
    </Bar>
  );
};

const Bar = styled.nav`
  font-family: "Poppins", sans-serif;
  position: fixed;
  top: 0;
  width: 100vw;
  font-size: 18px;
  // background-image: linear-gradient(#2a5d32, rgba(0, 0, 0, 0.2));
  background-color: #2a5d3233;
  border-bottom: 0.6px solid gray;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  backdrop-filter: blur(20px);
`;
const MainNav = styled.ul`
  list-style-type: none;
  display: flex;
  color: #fcfcfc;
  gap: 30px;
  font-size: 14px;
  font-weight: 400;
  align-items: center;
`;
const NavLi = styled.a`
  display: flex;
  flex-direction: column;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #ebff25;
  }
`;
const Button = styled.button`
  border-radius: 8px;
  height: 48px;
  width: 165px;
  padding: 16px 32px;
  background-image: linear-gradient(to right, #d4f938, #32d875);
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export default Navbar;
