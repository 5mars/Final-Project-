import styled from "styled-components"
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import auth from "../unDraw/authentification.svg"
import {useAuth0} from "@auth0/auth0-react"



const SignIn = () => {
    // const { logInWithRedirect, isAuthenticated} = useAuth0();
    return (
        <Container>
            <Master>


            <Main>
                <Title>Sign In</Title>
                
                <Form>
                    <InputDiv>
                        <Label for="email">Email</Label>
                        <Input required name="email" type="email" placeholder="Enter your email..."></Input>

                        <Label for="password">Password</Label>
                        <Input required name="password" type="password" placeholder="Enter your password..."></Input>
                    </InputDiv>

                    <BtnDiv>
                        <Button>Sign In</Button>
                    </BtnDiv>
                </Form>

                <BottomDiv>
                    <Nav to="/signup">Don't have an account?</Nav>
                    <Nav to="/forgot">Forgot password?</Nav>
                </BottomDiv>
            </Main>

            <ImgDiv>
                <Img src={auth} alt="Character's image"/>
            </ImgDiv>            
            
                </Master>
            <Footer/>
        </Container>
    )
}


//styling 
const Container = styled.div`
padding: 0.5rem;

`
const Master = styled.div`
`
const Main = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
background-color: #E6E6E6;
margin: 5% 30%;
border-radius: 1rem;
`

const Title = styled.h1`
    color: #F65D5A;
    text-align: center;
`
const Form = styled.form`

`
const InputDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin: 10%;
`
const Label = styled.label`
color: #F65D5A;
font-weight: bold;
font-size: 18px;
margin-bottom: 6px;
`
const Input = styled.input`
border: 1px solid #F65D5A;
border-radius: 5px;
background-color: #E6E6E6;
height: 2rem;
margin-bottom: 1rem;
font-size: 16px;
color: #F65D5A;

&:focus {
    outline: none;
}
`
const BtnDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Button = styled.button`
background-color: #F65D5A;
color: #E6E6E6;
height: 2.5rem;
width: 10rem;
border: none;
border-radius: 1rem;
font-size: 16px;
cursor: pointer;

&:hover {
    color: lightgray;
}
`

const BottomDiv = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
`

const Nav = styled(NavLink)`
font-size: 14px;
text-decoration: none;
color: gray;

&:hover {
    color: #F65D5A;
}
`
const ImgDiv = styled.div`
display: flex;
justify-content: flex-end;
position: relative;
`
const Img = styled.img`

width: 30%;
margin-top: -20%;
`
export default SignIn;