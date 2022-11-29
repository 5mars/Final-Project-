import styled from "styled-components"
import Footer from "./Footer";
import profile from "../unDraw/profile.svg"
import profilePic from "../unDraw/profilePic.svg"
import { FiMapPin, FiEdit } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import EditProfile from "./EditProfile";
import { useParams } from "react-router-dom";
import { User } from "@auth0/auth0-react";
import textField from "../unDraw/textfield.svg"
import { UserContext } from "./Context";


const Profile = () => {

const [edit, setEdit] = useState(false);
const handleEdit = () => {
    setEdit(!edit)
}

const {currentUser, setCurrentUser, fetchUser} = React.useContext(UserContext);


    return (
        <>
        {!currentUser ? <Loading>Loading...</Loading> : 
        <Container>
            <ProfileCard>
                <TopDiv>
                    {!edit ? <Title>Profile</Title> : <Title>Edit Profile</Title>}
                    <Button onClick={handleEdit}>
                        <FiEdit size={25}/>
                    </Button>
                </TopDiv>

        {!edit ? 
        <>
                <ProfilePicImg src={profilePic} alt="Profile picture"/>
                {edit && <EditProfile/>}
                <Infos>
                    <Name>Name</Name>
                    <Text>Gender</Text>
                    <Text>{currentUser.email}</Text>
                    <Location>
                        <FiMapPin/>
                        <Text>Location</Text>
                    </Location>
                </Infos>

                <About>
                    <Subtitle>About</Subtitle>
                </About>

                <FeedDiv>
                    <Subtitle>Feed</Subtitle>
                </FeedDiv>

                </>
                : <EditProfile/>}
            </ProfileCard>


            {!edit ? <CharDiv>
                <ProfileImg src={profile} alt="Profile character"/>
            </CharDiv> : 
            <CharDiv>
                <ProfileImg src={textField} alt="Profile character"/>
            </CharDiv>}
            <Footer/>
        </Container>}
        </>
    )
}


//styling 
const Container = styled.div`
padding: 0.5rem;
`
const Loading = styled.h1`
color: #F65D5A;
text-align: center;
`

const TopDiv = styled.div`
display: flex; 
justify-content: space-between;
`
const ProfileCard = styled.div`
background-color: #E6E6E6;
border-radius: 1rem;
padding: 1rem;
margin: 5%;
`
const Title = styled.h1`
color: #F65D5A;
margin: 0;
`
const Infos = styled.div`
display: flex;
flex-direction: column;
`
const Name = styled.h3`
`
const Button = styled.button`
border: none;
cursor: pointer;
background-color: inherit;
color: #F65D5A;

&:hover {
    color: #F87977;
}
`
const About = styled.div`

`
const Location = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
color: gray;
`

const Text = styled.p`
margin: 0;
`

const Subtitle = styled.h3`
color: #F65D5A;
`
const ProfilePicImg = styled.img`
width: 5rem;
`
const FeedDiv = styled.div`
display: flex;
justify-content: center;
`
const ProfileImg = styled.img`
width: 400px;
`
const CharDiv = styled.div`
display: flex;
margin-top: -7%;
`
export default Profile;