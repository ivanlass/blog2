import React from 'react';
import kiss from '../photos/kiss.jpg'
import styled from 'styled-components'

const Img = styled.div`
height:200px;
width: 200px;
background-position:center;
background-repeat:no-repeat;
background-size:cover;
border-radius: 100%;
margin: 0 auto;
`

const H1 = styled.h1`
color: white;
background: linear-gradient(to right, #f12711, #f5af19);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 30px;
`
const H3 = styled.h3`
color: white;
background: linear-gradient(to right, #f12711, #f5af19);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 30px;
`

const P = styled.p`
color: #5e5e5e;
margin: 10px;
`

const Testimonial = styled.div`
display: inline-block;
height: 100%;
width: 40%;
background : white;
padding: 20px;
text-align:center;
border: 1px solid transparent;
    padding: 10px;
    border-radius: 5px;
    border-image-source: linear-gradient(to right, #f12711, #f5af19); 
    border-image-slice: 1;
margin: 100px 30px;
@media (max-width: 768px) {
    width: 90%;
  }
`

const Main = styled.div`
text-align: center;
@media (max-width: 768px) {
    margin-top:40px;
  }
`

function Testimonials() {
    return (
        <Main >
            <H1>Din perfekta matchning är bara ett klick bort</H1>
            <H1>LÄS NÅGRA AV VÅRA FRAMGÅNGSHISTORIER</H1>
            <Testimonial>
                <H3>Match gjord i himlen</H3>
                <P>Jag var skeptisk men en natt var jag uttråkad och gjorde ett konto, låt oss se var alla damerna är. Så efter två timmar fick jag ett meddelande från Anna. Hon var vacker som modell, till att börja med trodde jag inte att hon var riktig. Vi pratade i tre dagar och sedan bjöd hon in mig. Jag kunde inte tro det först! Först var jag skeptisk, men när jag såg henne på tåget visste jag att hon var äkta och mitt livs kärlek.</P>
                <H3>Anna and Björn</H3>
                <Img style={{ backgroundImage: `url(${kiss})` }}>
                </Img>
            </Testimonial>
            <Testimonial>
                <H3>Jättebra erfarenhet, vi förväntar oss vår förstfödda!</H3>
                <P>Alexander och jag var redan bekanta med varandra. Han var i min brors fotbollslag. Så du kan föreställa dig chocken när han gillade min profil. Utan denna sida hade han aldrig tagit det första steget. Vi klickade redan på under den första chatten. Så jag är verkligen glad att han gjorde det eftersom vi förväntar oss vår förstfödda i Januari!</P>
                <H3>Alexander  Linnea</H3>
                <Img style={{ backgroundImage: `url(${kiss})` }}>
                </Img>
            </Testimonial>
        </Main>
    );
}

export default Testimonials;
