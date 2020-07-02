import React from 'react';
import styled from 'styled-components'
import { FaFilter, FaUser, FaCalendarCheck, FaMobile } from "react-icons/fa";


const Div = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(90deg, #EB3349 0%, #F45C43 100%);
display:flex;
justify-content:space-around;
@media (max-width: 790px) {
    justify-content:start;
    display:block;
    height: 1600px;
    overflow:visible;
  }
`

const Item = styled.div`
background: #fafafa;
text-align:center;
padding:50px 10px 10px 10px;
border-radius:5px;
-webkit-box-shadow: -2px 14px 23px -13px rgba(77,77,77,1);
-moz-box-shadow: -2px 14px 23px -13px rgba(77,77,77,1);
box-shadow: -2px 14px 23px -13px rgba(77,77,77,1);
@media (max-width: 790px) {
    height: 300px;
    margin:6px;
  }
  @media (max-width: 1300px) {
    height: 250px;
    padding: 20px 2px;
  }
`

const ItemWrapper = styled.div`
box-sizing:border-box;
margin-top:150px;
padding:60px 30px;
height:70%;
width:30%;
display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px 30px;
  grid-template-areas: ". ." ". .";
  @media (max-width: 790px) {
    width:100%;
    height:40%;
    overflow:visible;
    gap: 10px 10px;
    padding:5px;
  }
`

const Txt = styled.p`
color: grey;
padding: 20px 10px;
`
const WhyUs = styled.div`
    width:40%;
    padding: 150px 50px;
    @media (max-width: 790px) {
    width:100%;
  }
`

const H1 = styled.h1`
    font-size: 50px;
    color: #f5f5f5;
    margin-bottom: 100px;
    @media (max-width: 790px) {
        margin-bottom: 40px;
  }
`

const Text = styled.p`
    font-size: 20px;
    color: #dbdbdb;
`





function Advantages() {
    return (
        <Div >
            <ItemWrapper>
                <Item>
                    <FaFilter size={70} style={{ color: 'grey' }} />
                    <Txt>Find people that match you perfectly with advanced filtering.</Txt>
                </Item>
                <Item style={{ transform: "translate(0px, 30px)" }}>
                    <FaUser size={70} style={{ color: 'grey' }} />
                    <Txt>We focus more on people meeting each other.</Txt>
                </Item>
                <Item >
                    <FaCalendarCheck size={70} style={{ color: 'grey' }} />
                    <Txt>The database contains real participants only.</Txt>
                </Item>
                <Item style={{ transform: "translate(0px, 30px)" }}>
                    <FaMobile size={70} style={{ color: 'grey' }} />
                    <Txt>This is an original app that provides a new form of dating.</Txt>
                </Item>
            </ItemWrapper>
            <WhyUs>
                <H1>Why Choose Us?</H1>
                <Text>We represent an anonymous social app where identities stay private and enjoy simple speed dating. Unlike most other online dating or social apps, we focus more on people meeting each other.



We offer you a low key, sophisticated approach to dating. Preferring a 'less is more' environment devoid of typical event trappings. Meeting your special someone shouldn't be anything but a comfortable and relaxed experience. This is what we stand for. Simply choose the person near you and suggest the meeting or confirm the one from the related suggestions. This is where being lovely has its perks!</Text>
            </WhyUs>
        </Div>
    );
}

export default Advantages;
