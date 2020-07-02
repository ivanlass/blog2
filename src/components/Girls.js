import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import girl from '../photos/girl.jpg'
import styled from 'styled-components'
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";



const Wrapper = styled.div`
background:#f5f5f5;
text-align: center;
`

const H1 = styled.h1`
color: grey;
margin-top: 40px;
`

const Name = styled.h3`
background:white;
color: grey;
padding:30px;
position:absolute;
bottom:0;
left:0;
width:100%;
`
const Action = styled.h3`
padding:10px;
display:flex;
justify-content:space-around;
`



class Girls extends Component {


    onSwipeRight(data) {
        console.log("I was swiped right.");
    }

    clicking() {
        window.open("https://www.facebook.com/?sk=nf");
    }
    render() {
        return (
            <Wrapper>
                <H1>Izaberi zensku</H1>
                <CardWrapper>
                    <Card
                        onSwipeRight={this.onSwipeRight.bind(this)}
                        style={{ backgroundImage: `url(${girl})`, boxShadow: "1px 15px 19px -7px rgba(109,109,109,.7)" }}>
                        <Name>Isabela 33
                    <Action>
                                <FaThumbsDown
                                    onClick={this.clicking.bind(this)}
                                    size={25}
                                    style={{ color: "red" }} />
                                <FaThumbsUp
                                    onClick={this.clicking.bind(this)}
                                    size={25}
                                    style={{ color: "green" }} />
                            </Action>
                        </Name>
                    </Card>
                    <Card
                        onSwipeRight={this.onSwipeRight.bind(this)}
                        style={{ backgroundImage: `url(${girl})`, boxShadow: "1px 15px 19px -7px rgba(109,109,109,.7)" }}>
                        <Name>Isabela 33
                    <Action>
                                <FaThumbsDown
                                    onClick={this.clicking.bind(this)}
                                    size={25}
                                    style={{ color: "red" }} />
                                <FaThumbsUp
                                    onClick={this.clicking.bind(this)}
                                    size={25}
                                    style={{ color: "green" }} />
                            </Action>
                        </Name>
                    </Card>
                    <Card
                        onSwipeRight={this.onSwipeRight.bind(this)}
                        style={{ backgroundImage: `url(${girl})`, boxShadow: "1px 15px 19px -7px rgba(109,109,109,.7)" }}>
                        <Name>Isabela 33
                    <Action>
                                <FaThumbsDown
                                    onClick={this.clicking.bind(this)}
                                    size={25}
                                    style={{ color: "red" }} />
                                <FaThumbsUp
                                    onClick={this.clicking.bind(this)}
                                    size={25}
                                    style={{ color: "green" }} />
                            </Action>
                        </Name>
                    </Card>
                    <Card
                        onSwipeRight={this.onSwipeRight.bind(this)}
                        style={{ backgroundImage: `url(${girl})`, boxShadow: "1px 15px 19px -7px rgba(109,109,109,.7)" }}>
                        <Name>Isabela 33
                    <Action>
                                <FaThumbsDown
                                    onClick={this.clicking.bind(this)}
                                    size={25}
                                    style={{ color: "red" }} />
                                <FaThumbsUp
                                    onClick={this.clicking.bind(this)}
                                    size={25}
                                    style={{ color: "green" }} />
                            </Action>
                        </Name>
                    </Card>
                    <Card
                        onSwipeRight={this.onSwipeRight.bind(this)}
                        style={{ backgroundImage: `url(${girl})`, boxShadow: "1px 15px 19px -7px rgba(109,109,109,.7)" }}>
                        <Name>Isabela 33
                    <Action>
                                <FaThumbsDown
                                    onClick={this.clicking.bind(this)}
                                    size={25}
                                    style={{ color: "red" }} />
                                <FaThumbsUp
                                    onClick={this.clicking.bind(this)}
                                    size={25}
                                    style={{ color: "green" }} />
                            </Action>
                        </Name>
                    </Card>

                </CardWrapper>
            </Wrapper>
        );
    }
}

export default Girls