import styled from "styled-components"
import Footer from "./Footer";
import profile from "../unDraw/profile.svg"
import profilePic from "../unDraw/profilePic.svg"
import { FiMapPin, FiEdit } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import EditProfile from "./EditProfile";
import textField from "../unDraw/textfield.svg"
import { UserContext } from "./Context";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {

    const [edit, setEdit] = useState(false);
    const [theUser, setTheUser] = useState(null);

    const handleEdit = () => {
        setEdit(!edit)
        user && fetch(`/api/get-user/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setTheUser(data.data)
        })
    }

    const {isAuthenticated, user} = useAuth0();
    const {currentUser} = React.useContext(UserContext);

    useEffect(() => {
        user && fetch(`/api/get-user/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setTheUser(data.data)
        })
    }, [user])

    return (
        <>{!isAuthenticated && <Loading>Please Sign In</Loading>}
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
                {edit && <EditProfile setEdit={setEdit} handleEdit={handleEdit}/>}
                <Infos>
                    <Name>{theUser ? theUser.name : "Name"}</Name>
                    <Text>{theUser ? theUser.gender : "Gender"}</Text>
                    <Text>{currentUser.email}</Text>
                    <Location>
                        <FiMapPin/>
                        <Text>{theUser ? theUser.location : "Location"}</Text>
                    </Location>
                </Infos>

                <About>
                    <Subtitle>About</Subtitle>
                    <Text>{theUser ? theUser.about : ""}</Text>
                </About>

                {/* <FeedDiv>
                    <Subtitle>Feed</Subtitle>
                </FeedDiv> */}

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
padding-bottom: 1rem;
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