import styled from "styled-components"
import Footer from "./Footer";
const Feed = () => {
    return (
        <Container>
            <Main>
                <Title>Feed</Title>

            </Main>
            <Footer/>
        </Container>
    )
}


//styling 
const Container = styled.div`

`
const Title = styled.h1`
    color: #F65D5A;
`
const Main = styled.div`
background-color: #E6E6E6;
border-radius: 1rem;
padding: 1rem;
`

export default Feed;