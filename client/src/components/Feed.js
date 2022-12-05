import styled from "styled-components"
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "./Context";
import profilePic from "../unDraw/profilePic.svg"


const Feed = () => {
    const [artists, setArtists] = useState([]);
    // const [followedArtist, setFollowedArtist] = useState([]);
    const { user } = useAuth0();
    const {currentUser} = React.useContext(UserContext);

        //fetch that get all artists 
        useEffect(() => {
            fetch("/api/get-artists")
            .then(res => res.json())
            .then((data) => {
                setArtists(data.data)
            })
        }, [])

        //filter only artists that the current user follow
        const set = new Set(currentUser.following);
        const filteredArr = artists.filter(({name})=>set.has(name));

    return (
        <Container> {!artists && !user ? <Title>Loading your feed...</Title> : <>
            <Main>
                <Title>Feed</Title>
                {currentUser && filteredArr.map((artist) => {
                    return (
                        <CardsDiv key={artist.name}>
                            {artist.media.images.map((img) => {
                                return (
                                    <Nav to={`/${artist.name}`}>
                                        <TopDiv>
                                            <ProfilePic src={profilePic}/>
                                            <Text>{artist.name}</Text>
                                        </TopDiv>
                                        <Img src={img}/>
                                    </Nav>
                                )
                            })}
                        </CardsDiv>
                    )
                })}
            </Main>
            <Footer/>
        </>}
        </Container>
    )
}


//styling 
const Container = styled.div`

`
const Title = styled.h1`
    color: #F65D5A;
`
const Main = styled.div`
/* background-color: #E6E6E6; */
border-radius: 1rem;
padding: 1rem;
`
const TopDiv = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`
const ProfilePic = styled.img`
width: 3rem;
`
const Nav = styled(NavLink)`
display: flex; 
text-decoration: none;
color: #F65D5A;
flex-direction: column;
background-color: #E6E6E6;
margin: 1rem;
padding: 1rem;
gap: 1rem;
border-radius: 1rem;
width: 20%;
`
const Text = styled.p`

`
const CardsDiv = styled.div`
display: flex;
`
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: scale-down;
margin-bottom: 1rem;
`
export default Feed;