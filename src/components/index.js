import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import About from "./About";


const Indexcontainer = styled.section`
  padding-top: 0px;
`;

const Index = () => {
  return (
    <Indexcontainer>
      <Hero/>
      <About/>
    </Indexcontainer>
  );
};

export default Index;
