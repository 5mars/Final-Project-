import styled from "styled-components"
import error from "../unDraw/error.svg"
import Footer from "./Footer";


const Error = () => {
    return (
        <Container>
            <Main>
                <Title>Error 404</Title>
                <Text>Uh-oh, looks like something wrong happened! We are putting our best engineer on the case!</Text>
                <ImgDiv>
                    <Img src={error} alt="Error character"/>
                </ImgDiv>
            </Main>
            <Footer/>
        </Container>
    )
}


//styling 
const Container = styled.div`

`
const ImgDiv = styled.div`
display: flex;
justify-content: center;
`

const Img = styled.img`
width: 30%;
`

const Text = styled.p`
    color: #F65D5A;
    width: 70%;
    text-align: center;
`

const Title = styled.h1`
    color: #F65D5A;
    text-align: center;
`
const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #E6E6E6;
border-radius: 1rem;
padding: 1rem;
margin: 5%;
`
export default Error;