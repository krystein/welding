import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//import components
import { AboutContainer, AboutContent, AboutH1 } from "./AboutElement";

const About = () => {
  return (
    <div id="About">
      <AboutContainer>
        <AboutContent className="container">
          <AboutH1>Company Name: IK's EZINWANNE NIG. LTD.</AboutH1>
          <div>
            <h3>Overview:</h3>
            <p>
              IK's EZINWANNE NIG, LTD. is a leading company specializing in
              high-quality welding and fabrication services. With a commitment
              to precision, innovation, and client satisfaction, the company has
              established itself as a trusted partner for a diverse range of
              industries.
            </p>
          </div>
          <div>
            <h5>Services</h5>
              <ol>
                <li>
                  <span className="font-weight-bolder">Welding Expertise:</span> Precision Welding and
                  Fabrication excels in various welding techniques, including
                  MIG (Metal Inert Gas), TIG (Tungsten Inert Gas), and ARC
                  welding. The company's team of skilled welders is capable of
                  working with a wide array of materials, from steel and
                  aluminum to exotic alloys.
                </li>
                <li>
                  <span className="font-weight-bolder">Custom Fabrication:</span> The company takes pride in
                  its ability to transform raw materials into bespoke structures
                  and components. Whether it's a unique architectural piece,
                  industrial equipment, or specialized components for machinery,
                  Precision Welding and Fabrication ensures that each project
                  meets the highest standards of craftsmanship.
                </li>
                <li>
                  <span className="font-weight-bolder">Structural Fabrication:</span> From concept to
                  completion, Precision Welding and Fabrication provides
                  comprehensive structural fabrication services. This includes
                  the design and construction of steel frameworks for buildings,
                  bridges, and other infrastructure projects.
                </li>
                <li>
                  <span className="font-weight-bolder">Repair and Maintenance:</span> Recognizing the
                  importance of equipment uptime, the company offers prompt and
                  reliable repair and maintenance services. Whether it's fixing
                  damaged components or conducting routine inspections,
                  Precision Welding and Fabrication keeps clients' operations
                  running smoothly.
                </li>
              </ol>
          </div>
        </AboutContent>
      </AboutContainer>
    </div>
  );
};

export default About;
