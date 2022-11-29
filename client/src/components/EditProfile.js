import styled from "styled-components"
import Footer from "./Footer";
import textField from "../unDraw/textfield.svg"
import profilePic from "../unDraw/profilePic.svg"
import { useState, useEffect } from "react";


const EditProfile = () => {
// the save change button will post data to mongo db
const [changes, setChanges] = useState(null);

useEffect(() => {

})
    return (
        <Container>
            <ProfileCard>
                <ProfilePicImg src={profilePic} alt="Profile picture"/>
                
                <Infos>
                    <Form>
                        <Label for="name">Name</Label>
                            <Input required name="name" type="text" placeholder="Enter your name..."></Input>

                        <Label for="gender">Gender</Label>
                        <Input name="gender" type="text" placeholder="Enter your gender..."></Input>

                        <Label for="location">Location</Label>
                        <Input name="location" type="text" placeholder="Enter your city..."></Input>

                        <Label for="about">About</Label>
                        <Input name="about" type="text" placeholder="Tell us about you..."></Input>
                    </Form>
                </Infos>

                    <BtnDiv>
                        <Button>Save changes</Button>
                    </BtnDiv>

            </ProfileCard>

        </Container>
    )
}


//styling 
const Container = styled.div`
/* padding: 0.5rem; */
`
const ProfileCard = styled.div`
background-color: #E6E6E6;
border-radius: 1rem;
padding: 1rem;
`

const Infos = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`
const Form = styled.form`
display: flex;
flex-direction: column;
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
    color: #F98D8B;
}
`

const BtnDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const ProfilePicImg = styled.img`
width: 5rem;
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
width: 30%;

&:focus {
    outline: none;
}
`
export default EditProfile;