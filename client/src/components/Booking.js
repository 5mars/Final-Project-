import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import booking from "../unDraw/booking.svg";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Booking = () => {

    // Date picker from https://projects.wojtekmaj.pl/react-datetime-picker/
    const [value, onChange] = useState(new Date());
    const [formData, setFormData] = useState({});
    const {user} = useAuth0();
    const navigate = useNavigate()
    const {artistId} = useParams();

    const handleSubmit = (e) => {
        //patch but same format as a post 
        e.preventDefault();
        //PATCH in server 
        fetch(`/api/add-reservation/${artistId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...formData, email: user.email, withArtist: artistId, appointment: value}),
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            let resId = data.data.id
            navigate(`/confirmation/${resId}`, { state: {id: resId}})
        })
    }
    
    const handleChange = (key, value) => {
        setFormData({...formData, 
            [key]: value
            });
        }

return(
<Container>
    <Title>Booking</Title>
    <Main>
        <Title>Confirm appointment</Title>
        <Form onSubmit={(e) => handleSubmit(e)}>
            <InputDiv>            
                <Label htmlFor="name">Name</Label>
                <Input id="name" onChange={(e) => {handleChange(e.target.id, e.target.value)}} name="name" required type="text" placeholder="Enter your name..."></Input>


                <Label htmlFor="precision">Precision for the artist</Label>
                <Input id="precision" onChange={(e) => {handleChange(e.target.id, e.target.value)}} required name="precision" type="email" placeholder="Write here..."></Input>

                <Label htmlFor="time">Pick a time and date</Label>
                    <DateTimePicker required format="EEE, MMM d, hh:mm" onChange={onChange} value={value}/>
                </InputDiv>
            <BtnDiv>
                <Button onClick={handleSubmit}>Confirm Appointment</Button>
            </BtnDiv>
        </Form>
        <BackDiv>
            <Nav onClick={() => navigate(-1)}><FiArrowLeft/>Return</Nav>
        </BackDiv>
    </Main>
    <ImgDiv>
        <Img src={booking} />
    </ImgDiv>
    <Footer/>
</Container>
)
}

const Container = styled.div`
padding: 1rem;
`
const Main = styled.div`
background-color: #E6E6E6;
padding: 1rem;
border-radius: 1rem;
margin: 10% 20%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 2rem;
`
const InputDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin: 10%;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Title = styled.h1`
color: #F65D5A;
`

const ImgDiv = styled.div`
display: flex;
justify-content: flex-end;
`
const Img = styled.img`
width: 25rem;
`
const BtnDiv = styled.div`
align-self: center;
`
const Button = styled.button`
background-color: #F65D5A;
color: #E6E6E6;
height: 2.5rem;
width: 10rem;
border: none;
border-radius: 0.7rem;
font-size: 16px;
cursor: pointer;
margin-top: 1rem;
&:hover {
    color: lightgray;
}
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
const BackDiv = styled.div`
display: flex;
text-align: center;
`
const Nav = styled(NavLink)`
text-decoration: none;
color: #F65D5A;

&:hover {
    color: #F98D8B;
}
`
export default Booking;