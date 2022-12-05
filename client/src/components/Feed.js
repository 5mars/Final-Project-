import styled from "styled-components"
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "./Context";

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
        <Container> {!artists && !currentUser ? <Title>Loading your feed...</Title> : <>
            <Main>
                <Title>Feed</Title>
                {currentUser && filteredArr.map((artist) => {
                    return (
                        <p key={artist.name}>{artist.name}</p>
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

export default Feed;