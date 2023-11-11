import React, { useEffect, useState, useRef} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import components
import styled from 'styled-components';
import {SlideData} from '../data/SlideData';



const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`;

const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;

const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`;

const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
&::before{
    content:'';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        0deg, rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.2) 50%,
        rgba(0,0,0,0.6) 100%
    );
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
}
`;

const HeroImage = styled.img`
position: absolute;
top: 0;
left; 0;
width: 100vw;
height: 50vh;
object-fit: cover;
`;






const Hero =() => {
    
//creating slide function
    const [current,setCurrent] = useState(0);
    const length = SlideData.length
    const timeout = useRef(null);

    useEffect(()=>{
        const nextSlide=()=>{
            setCurrent(current=>(current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide,4000);

        return function(){
            if(timeout.current){
                clearTimeout(timeout.current);
            }
        }
    },[current,length]);





  return (
    <HeroSection>
        <HeroWrapper>
            {SlideData.map((slide,index)=>{
                return(
                <HeroSlide key={index}>
                    {index === current && (
                    <HeroSlider>
                            <HeroImage src={slide.image} alt={slide.alt} className='img-fluid'/>
                    </HeroSlider>
                    )}
                </HeroSlide>
                  )
              })}
          </HeroWrapper>
      </HeroSection>
  )
}

export default Hero