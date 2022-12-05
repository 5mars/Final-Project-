import styled from "styled-components"
import textField from "../unDraw/textfield.svg"
import profilePic from "../unDraw/profilePic.svg"
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const EditProfile = ({handleEdit, setEdit}) => {
// the save change button will post data to mongo db
const [formData, setFormData] = useState({});
const {user} = useAuth0();


const handleSubmit = (e) => {
    //patch but same format as a post 
    e.preventDefault();
    //PATCH in server 
    fetch("/api/edit-user", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({...formData, email: user.email}),
    })
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        setEdit(false)
    })
}

const handleChange = (key, value) => {
    setFormData({...formData, 
        [key]: value
        });
    }


    return (
        <Container>
            <ProfileCard>
                <ProfilePicImg src={profilePic} alt="Profile picture"/>
                
                <Infos>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Label htmlFor="name">Name</Label>
                            <Input required onChange={(e) => {handleChange(e.target.id, e.target.value)}} id="name" name="name" type="text" placeholder="Enter your name..." ></Input>

                        <Label htmlFor="gender">Gender</Label>
                        <Input onChange={(e) => {handleChange(e.target.id, e.target.value)}} name="gender" type="text" id="gender" placeholder="Enter your gender..."></Input>

                        <Label for="location">Location</Label>
                        <Input onChange={(e) => {handleChange(e.target.id, e.target.value)}}  name="location" type="text" id="location" placeholder="Enter your city..."></Input>

                        <Label for="about">About</Label>
                        <Input onChange={(e) => {handleChange(e.target.id, e.target.value)}}  name="about" type="text" id="about" placeholder="Tell us about you..."></Input>
                        <BtnDiv>
                            <Button type="submit" 
                            onClick={()=> handleSubmit}>Save changes</Button>
                        </BtnDiv>
                    </Form>
                </Infos>
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