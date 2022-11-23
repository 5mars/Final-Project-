import styled from "styled-components"
import Footer from "./Footer";

import sad from "../unDraw/sad.svg"
import browsing from "../unDraw/browsing.svg"
import message from "../unDraw/message.svg"
import fireworks from "../unDraw/firework.svg"
import group from "../unDraw/group.svg"
import discover from "../unDraw/discover.svg"
import resume from "../unDraw/resume.svg"

const Homepage = () => {
    return (
        <Container>
            <Section>
                <Img src={sad} alt="Svg Image"/>
            </Section>

            <Section>
                <Img src={browsing} alt="Svg Image"/>
            </Section>

            <Section>
                <Img src={message} alt="Svg Image"/>
            </Section>

            <Section>
                <Img src={fireworks} alt="Svg Image"/>
            </Section>

            <Section>
                <Img src={resume} alt="Svg Image"/>
            </Section>

            <Section>
                <Img src={discover} alt="Svg Image"/>
            </Section>

            <Section>
                <Img src={group} alt="Svg Image"/>
            </Section>
            <Footer/>
        </Container>
    )
}


//styling 
const Container = styled.div`
padding: 0.5rem;
`

const Img = styled.img`
width: 20rem;
`

const Section = styled.div`

`


export default Homepage