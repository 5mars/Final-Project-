import styled from "styled-components"
import Footer from "./Footer";
import {FiArrowRight } from "react-icons/fi"
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import sad from "../unDraw/sad.svg";
import browsing from "../unDraw/browsing.svg";
import message from "../unDraw/message.svg";
import fireworks from "../unDraw/firework.svg";
import group from "../unDraw/group.svg";
import discover from "../unDraw/discover.svg";
import resume from "../unDraw/resume.svg";
import { UserContext } from "./Context";
import LogInBtn from "./LogInBtn";

const Homepage = () => {
    const {isAuthenticated, user, loginWithRedirect} = useAuth0();

    return (
        <Container>
            <Section>
                <TextDiv>
                    <Blop>
                    </Blop>
                    <Text>Nowadays finding a tattoo artist can be difficult</Text>
                </TextDiv>
                <Img src={sad} alt="Svg Image"/>
            </Section>

            <Section>
                <Img src={browsing} alt="Svg Image"/>
                <TextDiv>
                    <Text>Endless scrolling on social medias...</Text>
                </TextDiv>
            </Section>

            <Section>
                <TextDiv>
                    <Text>... or messaging multiple artists that you might not like</Text>
                </TextDiv>
                <Img src={message} alt="Svg Image"/>
            </Section>

            <Section>
                <Img src={fireworks} alt="Svg Image"/>
                <TextDiv>
                    <Text>Fortunately, <Logo>TattooWix</Logo> is here to save the day! </Text>
                </TextDiv>
            </Section>

            <Section>
                <TextDiv>
                    <Text>Explore, discover, message and follow artists all around the world !</Text>
                </TextDiv>
                <Img src={discover} alt="Svg Image"/>
            </Section>

            <Section>
                <Img src={resume} alt="Svg Image"/>
                <TextDiv>
                    <Text>All in one place!</Text>
                </TextDiv>
            </Section>

            <FinalSection>
                <TextDiv>
                    <Text>Start your journey now</Text>
                </TextDiv>
                <Img className="last" src={group} alt="Svg Image"/>

                    <SignUpDiv>
                        <Button onClick={()=> loginWithRedirect()}><SignUp>Sign Up</SignUp></Button>
                        <FiArrowRight style={{color: "#F65D5A",}} size={30}/>
                    </SignUpDiv>

            </FinalSection>
            <Footer/>
        </Container>
    )
}


//styling 
const Container = styled.div`
padding: 0.5rem;
`

const Img = styled.img`
width: 35rem;
`

const Section = styled.div`
display: flex;
justify-content: space-between;
margin: 0 5%;
align-items: center;
height: 90vh;
`

const FinalSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 90vh;
margin-bottom: 10rem;

img {
    margin-top: -3rem;
    margin-bottom: 5rem;
}

div {
    display: flex;
    justify-content: center;
    width: 100%;
}
`

const TextDiv = styled.div`
width: 50%;
`

const Text = styled.h1`
font-weight: bold;
color: white;
font-size: 48px;
`

const Logo = styled.span`
color: #F65D5A;
`

const Nav = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
color: #F65D5A;
cursor: pointer;
text-decoration: none;

&:hover {
    color: #E6E6E6;
}
`
const Blop = styled.div`

`
const SignUp = styled.h1`

`
const SignUpDiv = styled.div`
display: flex;
align-items: center;
`

const Button = styled.button`
background-color: inherit;
border: none;
color: #F65D5A;
font-size: 16px;
cursor: pointer;
&:hover {
    color: #F98D8B;
}
`
export default Homepage