import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <Container>
                <Contact>
                    <Title>Contact</Title>
                    <Email>support@tattoo.ca</Email>
                    <Nav to="/aboutus">About Us</Nav>
                </Contact>

                <Pages>
                    <Title>Navigation</Title>
                    <Nav to="/">Homepage</Nav>
                    <Nav to="/explore">Explore</Nav>
                    <Nav to="/discover">Discover</Nav>
                    <Nav to="/feed">Feed</Nav>
                </Pages>

                <Legal>
                    <Title>Legal</Title>
                    <Nav to="#">Terms & Conditions</Nav>
                    <Nav to="#">Privacy Policy</Nav>
                </Legal>
        </Container>
    )
}


//styling 
const Container = styled.div`
position: relative;
bottom: 0;
display: flex;
justify-content: space-between;
width: 100%;
background-color: #044753;
color: white;
`
const Title = styled.h2`
font-size: 20px;
`

const Email = styled.a`
text-decoration: underline;
cursor: pointer;
&:hover {
    color: #F65D5A;
}
`
const Contact = styled.div`
display: flex;
flex-direction: column;
`

const Legal = styled.div`
display: flex;
flex-direction: column;
`

const Pages = styled.div`
display: flex;
flex-direction: column;

`

const Nav = styled(NavLink)`
text-decoration: none;
color: #E6E6E6;
cursor: pointer;
margin-top: 10px;

&:hover {
    color: #F65D5A;
}
`
export default Footer