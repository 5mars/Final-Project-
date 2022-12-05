import styled from "styled-components"
import Footer from "./Footer";
import profile from "../unDraw/profile.svg"
import profilePic from "../unDraw/profilePic.svg"
import { FiMapPin } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { UserContext } from "./Context";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const ArtistProfile = () => {

const [edit, setEdit] = useState(false);
const [artist, setArtist] = useState(null)
const [followingValue, setFollowingValue] = useState([]);
const {user} = useAuth0();
const {currentUser, setCurrentUser, setRefresh, refresh} = React.useContext(UserContext);

const {artistId} = useParams();

//fetch specific artist infos
useEffect(()=> {
    fetch(`/api/${artistId}`)
    .then(res => res.json())
    .then((data) => {
        setArtist(data.data)
    })
}, [])

//fetch for follow 
const handleSubmit = (e) => {
    //patch but same format as a post 
    e.preventDefault();
    //PATCH in server 
    fetch(`/api/${artistId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({following: artistId, email: user.email}),
    })
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        setCurrentUser({...currentUser, following: data.data})
        setRefresh(!refresh)
    })
}
let set;
if(currentUser) {
    set = new Set(currentUser.following)
};
console.log(currentUser)
    return (
        <Container> {currentUser && <>
            <ProfileCard>
                <ProfilePicImg src={profilePic} alt="Profile picture"/>
                {artist ? <>
                <Infos>
                    <NameFollowDiv>

                        <Name>{artist.name}</Name>
                        {set.has(artist.name) === false ? 
                        <FollowBtn onClick={handleSubmit}>Follow</FollowBtn> :
                        <FollowedBtn onClick={handleSubmit}>Following</FollowedBtn>}
                    </NameFollowDiv>
                    <Text><Span>Gender:</Span> {artist.gender}</Text>
                    <Text><Span>Style:</Span> {artist.style}</Text>
                    <Text><Span>Studio:</Span> {artist.shop}</Text>
                    <Text><Span>Shop URL:</Span> <a>URL</a></Text>
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
                    <Nav to={`/${artistId}/shop`}>Shop</Nav>
                    <Nav to={`/${artistId}/booking`}>Book Now</Nav>
                    <Nav to={`/${artistId}/gallery`}>Gallery</Nav>
                </BottomDiv>
</> : <Loading>Loading artist info...</Loading>}


            </ProfileCard>


            <CharDiv>
                <ProfileImg src={profile} alt="Profile character"/>
            </CharDiv> </>}
            <Footer/>
        </Container>
    )
}


//styling 
const Container = styled.div`
padding: 0.5rem;
`
const Span = styled.span`
color: #F65D5A;
font-size: 18px;
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

const NameFollowDiv = styled.div `
display: flex; 
align-items: center;
gap: 0.5rem;
`

const FollowBtn = styled.button`
border: none;
background-color: #F65D5A;
color: #E6E6E6;
border-radius: 5px;
cursor: pointer;

&:hover {
    background-color: #F98D8B;
}
`

const FollowedBtn = styled.button`
border: none;
background-color: #F98D8B;
color: #E6E6E6;
border-radius: 5px;
cursor: pointer;
&:hover {
    background-color: #F65D5A;
}
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
margin: 5px 0;
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