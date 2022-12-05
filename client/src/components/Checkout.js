import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiAlertCircle } from "react-icons/fi";

const Checkout = () => {
    const {artistId} = useParams();
    const {user} = useAuth0();
    const navigate = useNavigate()
    const [formData, setFormData] = useState([]);
    const handleSubmit = (e) => {
        //patch but same format as a post 
        e.preventDefault();
        //PATCH in server 
        fetch(`/api/buy-item/${artistId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...formData, email: user.email, withArtist: artistId}),
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            let resId = data.data.id
            navigate(`/shopconfirmation/${resId}`, { state: {id: resId}})
        })
    }
    
    const handleChange = (key, value) => {
        setFormData({...formData, 
            [key]: value
            });
        }

    return (
        <Container>
            <InfoDiv>
                <FiAlertCircle size={40} color="#F65D5A"/>
                <Info>
                    After checkout, the right for this tattoo will be yours. You can decide to get it tattooed by someone else or <Nav to={`/${artistId}/booking`}>make an appointment</Nav> with this artist. If that's the case, just precise the piece you bought and your email address.
                </Info>
            </InfoDiv>
            <Title>Checkout</Title>
            <Main>
                <Subtitle>Informations</Subtitle>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Label htmlFor="name">Name: </Label>
                    <Input required onChange={(e) => {handleChange(e.target.id, e.target.value)}} id="name" name="name" type="text" placeholder="Enter your name..."></Input>

                    <Label htmlFor="email">Email: </Label>
                    <Input onChange={(e) => {handleChange(e.target.id, e.target.value)}} required id="email" name="email" type="text" placeholder="Enter your email..." value={user.email}></Input>

                    <Label htmlFor="description"><FiAlertCircle size={15}/> Description: </Label>
                    <Input onChange={(e) => {handleChange(e.target.id, e.target.value)}} required name="description" id="description" type="text" placeholder="Mention the flash you want to acquire..."></Input>

                    <Subtitle>Payment Section</Subtitle>
                    <PaymentDiv>
                        <Label htmlFor="card">Name: </Label>
                        <Input required id="card" name="card" type="text" placeholder="1111-2222-3333-4444"></Input>

                        <Label htmlFor="CVV">CVV: </Label>
                        <Input  required id="CVV" name="CVV" type="text" placeholder="123"></Input>

                        <Label htmlFor="exp">Expiration Date: </Label>
                        <Input required id="exp" name="exp" type="text" placeholder="MM/YY"></Input>
                    </PaymentDiv>
                    <BtnDiv>
                        <Button onClick={handleSubmit}>Buy Now!</Button>
                    </BtnDiv>
                </Form>
            </Main>
            <BackDiv>
                <Nav onClick={() => navigate(-1)}><FiArrowLeft/>Return</Nav>
            </BackDiv>
        </Container>
    )
}
//styling
const Container = styled.div`
padding: 1rem;
`

const Title = styled.h1`
    color: #F65D5A;
`

const Subtitle = styled.h3`
    color: #F65D5A;
    text-align: center;
    text-decoration: underline;
`
const InfoDiv = styled.div`
display: flex;
align-items: center;

`
const Info = styled.p`
color: #E6E6E6;
border-radius: 1rem;
padding: 1rem;
/* border: 1px solid #F65D5A; */
`
const Main = styled.div`
background-color: #E6E6E6;
border-radius: 1rem;
padding: 1rem;
`


const BackDiv = styled.div`
display: flex;
text-align: center;
margin-top: 2rem;
`
const Nav = styled(NavLink)`
text-decoration: none;
color: #F65D5A;

&:hover {
    color: #F98D8B;
}
`
const Form = styled.form`
display: flex;
flex-direction: column;
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

const PaymentDiv = styled.div`
display: flex;
align-items: center;
gap: 1rem; 

`

export default Checkout;