import styled from "styled-components";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({handleClick}) => {
    return (
        <Container>
            <Menu>
                <First>
                    <Nav onClick={handleClick} to="/signin"><Span>Sign In</Span></Nav>
                </First>

                <Second>
                    <Nav onClick={handleClick} to="/signup">Sign Up</Nav>
                </Second>

                <Middle>
                    <Nav onClick={handleClick} to="/explore">Explore</Nav>
                    <Nav onClick={handleClick} to="/discover">Discover</Nav>
                    <Nav onClick={handleClick} to="/feed">Feed</Nav>
                </Middle>

                <Bottom>
                <Nav onClick={handleClick} to="/profile">Profile</Nav>
                <Nav onClick={handleClick} to="/aboutus">About Us</Nav>
                </Bottom>
            </Menu>
        </Container>
    )
}


//styling 
const Container = styled.div`
display: flex;
justify-content: flex-end;
`

const Menu = styled.div`
position: absolute;
z-index: 1000;
display: flex;
flex-direction: column;
justify-content: space-between;
border-radius: 1rem;
height: 35%;
width: 10rem;
padding: 1rem;
border: 1px solid #E6E6E6;
background-color: #205862;
box-shadow: 5px 10px 20px black;
`
const First = styled.div`

`
const Span = styled.p`
margin: 0;
color: #F65D5A;
font-weight: bold;
`
const Second = styled.div`

`

const Middle = styled.div`
display: flex;
flex-direction: column;

`

const Bottom = styled.div`
display: flex;
flex-direction: column;

`

const Nav = styled(NavLink)`
text-decoration: none;
color: #E6E6E6;
margin-bottom: 1rem;
cursor: pointer;

&:hover {
    color: gray;
}
`
export default BurgerMenu;