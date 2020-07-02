import React, { useState, useEffect } from 'react';
import woman from '../photos/woman.png'
import styled from 'styled-components'
import { isBrowser } from "react-device-detect";
import { AnimateOnChange, HideUntilLoaded } from 'react-animation'

const words = ["dobar", "odlican", 'asd']

const Img = styled.div`
width:100vw;
height:100vh;
background: url(${woman});
background-position:right bottom;
background-repeat:no-repeat;
background-size:contain;

`

const Wrapper = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
`
const H1 = styled.h1`
color: white;
position: absolute;
font-size:100px;
top: 20%;
left:30%;
font-weight:100;
@media (max-width: 768px) {
  top: 10%;
  left:10%;
  }
`
const Span = styled.h1`

font-size:100px;

@media (max-width: 768px) {
  top: 10%;
  left:10%;
  }
`


const Button = styled.button`
width:300px;
position: absolute;
left: 30%;
top: 50%;
height:50px;
border:none;
border-radius: 10px;
font-size:30px;
color:#454545;

-webkit-box-shadow: 1px 15px 19px -7px rgba(109,109,109,0.7);
-moz-box-shadow: 1px 15px 19px -7px rgba(109,109,109,.7);
box-shadow: 1px 15px 19px -7px rgba(109,109,109,.7);
cursor:pointer;
transition: all ease-in-out 300ms;
&:hover{
    box-shadow: 0px 37px 20px -20px rgba(0,0,0,0.2);
    transform: translate(0px, -1px) scale(1.05)  ;
  }
  &:active{
    box-shadow: 0px 37px 20px -20px rgba(0,0,0,0.22);
    transform: translate(0px, -8px) scale(1.15);
  }
  @media (max-width: 768px) {
  top: 80%;
  left:10%;
  }
    `


function Hero() {

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
        setCurrent(0)
      } else {
        setCurrent(current + 1)
      }
    }, 2000);
    return (() => {
      clearInterval(interval)
    })
  })

  return (
    <Wrapper>
      <Img >
      </Img>
      <H1>
        <span>Ovaj sajt je</span>
        <Span><AnimateOnChange durationOut="500">{words[current]}</AnimateOnChange></Span>

      </H1>
      <Button>CLICK</Button>
    </Wrapper>
  );
}

export default Hero;
