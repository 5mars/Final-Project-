import styled from "styled-components"
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import profilePic from "../unDraw/profilePic.svg"

const Discover = () => {
    const [artists, setArtists] = useState([]);

        //fetch that get all artists 
        useEffect(() => {
            fetch("/api/get-artists")
            .then(res => res.json())
            .then((data) => {
                setArtists(data.data)
            })
        }, [])

    return (
        <Container> {!artists ? <Title>Loading...</Title> : <>        
                <Title>Discover</Title>
            <Main>
                <PostCard>

                        {artists.map((artist) => {
                            return (
                                <div key={artist.name}>
                                    <TopDiv>
                                        <ProfilePic src={profilePic} />
                                        <Text>{artist.name}</Text>
                                    </TopDiv>
                                    {artist.media.images.map((img) => {
                                    return (
                                        <NavLink key={img} to={`/${artist.name}`}>
                                            <Img src={img}/>
                                        </NavLink>
                                    )
                                })}</div>
                            )
                        })}

                </PostCard>
            </Main>
</>}
            <Footer/>
        </Container>
    )
}


//styling 
const Container = styled.div`
padding: 1rem;
`
const Title = styled.h1`
    color: #F65D5A;
`
const Main = styled.div`

`

const Img = styled.img`
width: 10rem;
height: 10rem;
object-fit: scale-down;
margin-bottom: 1rem;
`

const PostCard = styled.div`
display: flex;
align-items: center;
gap: 1rem;
padding: 1rem;
background-color: #E6E6E6;
border-radius: 1rem;
flex-wrap: wrap;
`

const ProfilePic = styled.img`
width: 5%;
`
const TopDiv = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`

const Text = styled.p`

`
export default Discover;