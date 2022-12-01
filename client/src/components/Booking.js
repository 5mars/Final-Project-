import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import booking from "../unDraw/booking.svg";
import Footer from "./Footer";



const Booking = () => {

    // Date picker from https://projects.wojtekmaj.pl/react-datetime-picker/
    const [value, onChange] = useState(new Date());

return(
<Container>
    <Title>Booking</Title>
    <Main>

            <DateDiv>
                <DateTimePicker required onChange={onChange} value={value}/>
            </DateDiv>
            <BtnDiv>
                <Button>Confirm Appointment</Button>
            </BtnDiv>

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
margin: 10% 30%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 2rem;
`
const Title = styled.h1`
color: #F65D5A;
`
const DateDiv = styled.div`

`
const ImgDiv = styled.div`
display: flex;
justify-content: flex-end;
`
const Img = styled.img`
width: 25rem;
`
const BtnDiv = styled.div`

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

&:hover {
    color: lightgray;
}
`
export default Booking;