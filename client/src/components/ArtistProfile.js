import styled from "styled-components"
import Footer from "./Footer";
import profile from "../unDraw/profile.svg"
import profilePic from "../unDraw/profilePic.svg"
import { FiMapPin, FiEdit } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import EditArtist from "./EditArtist";
import { UserContext } from "./Context";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const ArtistProfile = () => {

const [edit, setEdit] = useState(false);
const [artist, setArtist] = useState(null)


const handleEdit = () => {
    setEdit(!edit)
}

const {artistId} = useParams();

//fetch specific artist infos
useEffect(()=> {
    fetch(`/api/${artistId}`)
    .then(res => res.json())
    .then((data) => {
        setArtist(data.data)
    })
}, [])

    return (
        <Container>
            <ProfileCard>
                <TopDiv>
                    {!edit ? <Title>Artist Profile</Title> : <Title>Edit Profile</Title>}
                    <Button onClick={handleEdit}>
                        <FiEdit size={25}/>
                    </Button>
                </TopDiv>

        {!edit? 
        <>
                <ProfilePicImg src={profilePic} alt="Profile picture"/>
                {edit && <EditArtist/>}
                {artist ? <>
                <Infos>
                    <Name>{artist.name}</Name>
                    <Text>{artist.gender}</Text>
                    <Text>{artist.style}</Text>
                    <a>shop url</a>
                    <Location>
                        <FiMapPin/>
                        <Text>{artist.location}</Text>
                    </Location>
                </Infos>

                <About>
                    <Subtitle>About</Subtitle>
                    <Text>{artist.about}</Text>
                </About>

                <BottomDiv>
                    <Nav to="#">Shop</Nav>
                    <Nav to={`/${artistId}/booking`}>Book Now</Nav>
                    <Nav to="#">Gallery</Nav>
                </BottomDiv>
</> : <Loading>Loading artist info...</Loading>}
                </>
                : <EditArtist/>}
            </ProfileCard>


            <CharDiv>
                <ProfileImg src={profile} alt="Profile character"/>
            </CharDiv> 
            <Footer/>
        </Container>
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
const BottomDiv = styled.div`
display: flex;
justify-content: space-between;
margin: 5% 20%;
`
const Nav = styled(NavLink)`
color: #F65D5A;
text-decoration: none;
font-size: 18px;
cursor: pointer;

&:hover {
    color: #F98D8B;
}
`
const ProfileImg = styled.img`
width: 400px;
`
const CharDiv = styled.div`
display: flex;
margin-top: -7%;
`
export default ArtistProfile;