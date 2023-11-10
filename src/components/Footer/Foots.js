import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import Img from "../../img/PNG/logo.png";
import styled from "styled-components";
import instagram from "../../img/SVG/Instagram.svg";
import facebook from "../../img/SVG/Facebook.svg";
import twitter from "../../img/SVG/Twitter.svg";
import music from "../../img/SVG/Vector.svg";
import location from "../../img/SVG/Location.svg";
import call from "../../img/SVG/Call.svg";

const Logo = styled.div`
  display: flex;
`;

const Foot = () => {
  return (
    <div className="footer">
      <div className="p-3" style={{ padding: "20px 5px" }}>
        <div className="grid">
          <div>
            <Logo>
              <Link to="/">
                <img src={Img} alt="" />
              </Link>
              <h5>
                IK'S EZINWANNE <br />
                NIG. LTD.
              </h5>
            </Logo>
            <div>
              <p>
                KM 17 Aba Express Road Opp. Total Filing Station Port Harcourt
              </p>
            </div>
          </div>
          <div className="grid-1" style={{ gap: "10px" }}>
            
            <div>
              <img src={location} alt="" className="img" />
              <p style={{ fontSize: "13px" }}>
              KM 17 Aba Express Road Opp<br />
                ,Total Filing Station Port Harcour
              </p>
            </div>
            <div>
              <img src={call} alt="" className="img" />
              <p style={{ fontSize: "13px" }}>+2348036729799</p>
            </div>
            <div>
              <img src={call} alt="" className="img" />
              <p style={{ fontSize: "13px" }}>+2348154600838</p>
            </div>
          </div>
          <div className="d-flex" style={{ gap: "20px" }}>
            <img src={instagram} alt="" className="img-fluid" />
            <img src={facebook} alt="" className="img-fluid" />
            <img src={music} alt="" className="img-fluid" />
            <img src={twitter} alt="" className="img-fluid" />
          </div>
        </div>
        <hr />
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <div className="d-flex" style={{ gap: "10px" }}>
            <h6 style={{ fontSize: "13px" }}>Terms of use</h6>
            <h6 style={{ fontSize: "13px" }}>Privacy Environmental Policy</h6>
          </div>
          <div>
            <h6 style={{ fontSize: "13px" }}>
              Copyright © 2023 krystein . All Rights Reserved.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
