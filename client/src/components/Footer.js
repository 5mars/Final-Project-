import styled from "styled-components"

const Footer = () => {
    return (
        <Container>
            <Logo>Footer</Logo>
        </Container>
    )
}


//styling 
const Container = styled.div`
padding: 0.5rem;
bottom: 0;
width: 100%;
background-color: #044753;
color: white;
`

const Logo = styled.h1`
margin: 0;
`

export default Footer