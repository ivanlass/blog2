import React from 'react';
import styled from 'styled-components'
import { isBrowser } from "react-device-detect";

const Button = styled.button`
border:none;
width: 200px;
background-image: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
padding: 20px 0px;
border-radius: 5px;
color: white;
margin: 100px auto;
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
    margin: 100px auto;
  }
`

const Wrapper = styled.div`
height:70vh;
width: 100vw;
text-align:center;
@media (max-width: 768px) {
    height:600px;
  }
`

const H1 = styled.h1`
margin-top:150px;
text-align:center;
font-size: 52px;
color:grey;


`

function Cta() {
  return (

    <Wrapper>
      <H1>Registriraj se lako probaj</H1>
      <a href={isBrowser ? "https://www.facebook.com/home.php#_=_" : "https://www.youtube.com/watch?v=2FyAzT1PKQo"}>
        <Button>GO TO SITE</Button>
      </a>
    </Wrapper>
  );
}

export default Cta;
