import { useEffect, useState } from "react";
import styled from "styled-components"
import Footer from "./Footer";
import profilePic from "../unDraw/profilePic.svg"
import { FiMapPin, FiUser, FiBriefcase, FiPenTool} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Explore = () => {
    //======== NOTES ============
    //here you could find artists in your area respecting your criterias.
    //you should fetch all artists and all style first
    //you'd map everything in the front end
    //not quite sure how to handle multiple dropdown menu

    //TO DO : Create a main filter (regrouping the 3 together)
    //===========================

    const [style, setStyle] = useState(null);
    const [gender, setGender] = useState(null);
    const [location, setLocation] = useState(null);
    const [artists, setArtists] = useState([]);
    const [following, setFollowing] = useState(false)


    //different handlechange for every criteria 
    const handleChangeStyle = (e) => {
        setStyle(e.target.value);

    };

    const handleChangeLocation = (e) => {
        setLocation(e.target.value);

    };

    const handleChangeGender = (e) => {
        setGender(e.target.value);

    };

    //fetch that get all artists 
    useEffect(() => {
        fetch("/api/get-artists")
        .then(res => res.json())
        .then((data) => {
            setArtists(data.data)
        })
    }, [])


    //gives me arrays of locations and styles 
    const byLocation = Object.values(artists.reduce((object, {location})=>{
        object[location]={location}
        return object;
    },{}));


    const byStyle = Object.values(artists.reduce((object, {style})=>{
        object[style]={style}
        return object;
    },{}));

    //filters artists
    const locationFilter = artists.filter((fil) => fil.location === location); 
    const styleFilter = artists.filter((fil) => fil.style === style);
    const genderFilter = artists.filter((fil) => fil.gender === gender);


    return (

        <Container>
            {!artists ? <Title>Loading...</Title> : 
            <>
                <Title>Explore</Title>
                <DropDownDiv>
                    <Select disabled onChange={handleChangeLocation}>
                        <option>By Location</option>
                        {artists && byLocation.map((loc) => {
                            return (
                                <option key={loc.location}>{loc.location}</option>
                            )
                        })}
                    </Select>
                    <Select onChange={handleChangeStyle}>
                        <option>By Style</option>
                        {artists && byStyle.map((style) => {
                            return (
                                <option key={style.style}>{style.style}</option>
                            )
                        })}
                    </Select>
                    <Select disabled onChange={handleChangeGender}>
                        <option>By Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </Select>
                </DropDownDiv>
                <Main>
                    {styleFilter.map((artist) => {
                        return (
                        <Nav key={artists.name} to={`/${artist.name}`}>
                            <ArtistCard >

                                <Left>
                                    <ProfilePic src={profilePic} alt="artist profile pic"/>
                                    <TopDiv>
                                        <h2>{artist.name}</h2>
                                    </TopDiv>
                                    <IconSection>
                                        <FiMapPin/>
                                        <Text>{artist.location}</Text>
                                    </IconSection>

                                    <IconSection>
                                        <FiBriefcase/>
                                        <Text>{artist.shop}</Text>
                                    </IconSection>

                                    <IconSection>
                                        <FiPenTool/>
                                        <Text>{artist.style}</Text>
                                    </IconSection>

                                    <IconSection>
                                        <FiUser/>
                                        <Text>{artist.gender}</Text>
                                    </IconSection>
                                </Left>
                                <Right>
                                    <Title>Preview</Title>
                                    <PreviewDiv>
                                        {artist.media.images.map((img) => {
                                            return (
                                                <Preview src={img}/>
                                            )
                                        })}
                                    </PreviewDiv>
                                </Right>
                            </ArtistCard>
                        </Nav>
                        )
                    })}
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
const TopDiv = styled.div`
display: flex; 
align-items: center;
gap: 0.5rem;
`
const DropDownDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 20%;
padding: 1rem;
`

const Preview = styled.img`
width: 10rem;
height: 10rem;
border-radius: 5px;
object-fit: scale-down;
`
const Nav = styled(NavLink)`
text-decoration: none;
color: inherit;
cursor: pointer;
`
const Select = styled.select`
background-color: #E6E6E6;
border: 1px solid #F65D5A;
color: #F65D5A;
width: 25%;
height: 2rem;
font-size: 16px;
border-radius: 5px;
&:focus {
    outline: none;
}
`
const Main = styled.div`
border-radius: 1rem;
min-width: 80%;
display: flex;
flex-direction: column;
gap: 2rem;
`
const ArtistCard = styled.div`
background-color: #E6E6E6;
border-radius: 1rem;
padding: 1rem;
display: flex;
filter: drop-shadow(6px 5px 12px #000);
`
const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
min-width: 30%;
`
const Text = styled.p`
margin: 0.5rem;
`
const IconSection = styled.div`
display: flex;
align-items: center;
`
const ProfilePic = styled.img`
width: 100px;
`
const Right = styled.div`
`

const PreviewDiv = styled.div`
/* border: 1px solid blue; */
`
const Img = styled.img`
min-width: 30%;
min-height: 30%;
`
export default Explore;