import styled from "styled-components"
import {FiAlignJustify, FiSearch} from "react-icons/fi"
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";

const NavBar = () => {
    const [state, setState] = useState(false);

    const handleClick = () => {
        setState(!state)
    }

    return (
        <Container>
            <Navbar>
                <Left>
                    <NavLogo to="/">
                        <Logo>Tattoo</Logo>
                    </NavLogo>

                    <LeftList>
                        <Item>
                            <Nav to="/explore">Explore</Nav>
                        </Item>
                        <Item>
                            <Nav to="/discover">Discover</Nav>
                        </Item>
                        <Item>
                            <Nav to="/inspiration">Inspiration</Nav>
                        </Item>
                    </LeftList>
                </Left>

                <Right>
                    <RightList>
                        <Button>
                            <FiSearch size={25}/>
                        </Button>
                        
                        <Button>
                            <FiAlignJustify size={25} onClick={handleClick}/>
                        </Button>
                    </RightList>
                </Right>
            </Navbar>
        </Container>
    )
}


//styling 
const Container = styled.div`
padding: 0.5rem;
`

const Navbar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`


const Nav = styled(NavLink)`
color: #E6E6E6;
text-decoration: none;

&:hover {
    color: #F65D5A;
}

&.active{
    color: #F65D5A;
}
`
const NavLogo = styled(NavLink)`
    color: #F65D5A;
    text-decoration: none;
    cursor: pointer;
`

const Button = styled.button`
color: #E6E6E6;
background-color: inherit;
border: none;
cursor: pointer;

&:hover {
    color: #F65D5A;
}
`
const Item = styled.li`

`
const Left = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 70%;
`

const Logo = styled.h1`
margin: 0;
`

const Right = styled.div`
width: 30%;
`

const LeftList = styled.ul`
display: flex;
gap: 5rem;
`

const RightList = styled.ul`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 2rem;
`
export default NavBar;