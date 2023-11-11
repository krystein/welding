import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import components
import styled from "styled-components";
import { menuData } from "../../data/MenuData";
import { FaBars } from "react-icons/fa";
import "./navbar.css";
import Img from "../../img/cross.png";

const MenuBar = styled(FaBars)`
  display: none;
  @media Screen and (max-width: 1200px) {
    display: block;
    background-size: contain;
    height: 35px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #fff;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 48px;
  @media Screen and (max-width: 1200px) {
    display: none;
  }
`;
const NavMenuLink = styled.div`
cursor: pointer;
display: flex;
align-items: center;
padding: 0 1rem;
font-size: 1rem;
font-family: inter, sans-serif;
height: 100%
cursor: pointer;
text-decoration: none;
color: #fff;
:hover{
    color: #4c7fb5;
}
`;



const Navbar = ({ toggle }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className={colorChange ? "Itump active" : "Itump"}>
   <div className="d-flex text-white">
        <img src={Img} alt="img"  style={{width: "5%"}}/>
        <p className="m-0 d-flex align-items-center">IK'S EZINWANNE NIG. LTD.</p>
      </div>
      <MenuBar onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <Link key={index} to={item.link} style={{ textDecoration: "none" }}>
              <NavMenuLink href={item.link} key={index}>{item.title}</NavMenuLink>
            </Link>
          );
        })}
      </NavMenu>
    </nav>
  );
};

export default Navbar;
