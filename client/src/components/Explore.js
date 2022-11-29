import { useEffect, useState } from "react";
import styled from "styled-components"
import Footer from "./Footer";

const Explore = () => {
    //======== NOTES ============
    //here you could find artists in your area respecting your criterias.
    //you should fetch all artists and all style first
    //you'd map everything in the front end
    //not quite sure how to handle multiple dropdown menu
    //===========================

    const [style, setStyle] = useState(null);
    const [gender, setGender] = useState(null);
    const [location, setLocation] = useState(null);
    const [artists, setArtists] = useState([]);

    const handleChange = (e) => {
        setStyle(e.target.value);
    };

    //fetch that get all artists 
    useEffect(() => {
        fetch("/api/get-artists")
        .then(res => res.json())
        .then((data) => {
            setArtists(data.data)
        })
    }, [])

    //filters 
    const byLocation = Object.values(artists.reduce((object, {location})=>{
        object[location]={location}
        return object;
    },{}))

    const byStyle = Object.values(artists.reduce((object, {style})=>{
        object[style]={style}
        return object;
    },{}))

    
    return (
        <Container>
            {!artists ? <Title>Loading...</Title> : 
            <>
                <Title>Explore</Title>
                <DropDownDiv>
                    <Select onChange={handleChange}>
                        <option>By Location</option>
                        {byLocation.map((loc) => {
                            return (
                                <option key={loc.location}>{loc.location}</option>
                            )
                        })}
                    </Select>
                    <Select onChange={handleChange}>
                        <option>By Style</option>
                        {byStyle.map((style) => {
                            return (
                                <option key={style.style}>{style.style}</option>
                            )
                        })}
                    </Select>
                    <Select onChange={handleChange}>
                        <option>By Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>Doesn't matter</option>
                    </Select>
                </DropDownDiv>
                <Main>
                    Artists card below
                </Main>
            </>}
            <Footer/>
        </Container>
    )
}


//styling 
const Container = styled.div`

`
const Title = styled.h1`
    color: #F65D5A;
`
const DropDownDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 20%;
padding: 2rem;
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
background-color: #E6E6E6;
border-radius: 1rem;
padding: 1rem;
`

export default Explore;