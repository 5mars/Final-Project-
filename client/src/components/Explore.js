import { useState } from "react";
import styled from "styled-components"
import Footer from "./Footer";
const Explore = () => {
    //here you could find artists in your area respecting your criterias.
    //you should fetch all artists and all style first
    //you'd map everything in the front end
    //not quite sure how to handle multiple dropdown menu
    const [style, setStyle] = useState(null);
    const [gender, setGender] = useState(null);
    const [location, setLocation] = useState(null);

    const handleChange = (e) => {
        setStyle(e.target.value);
    };

    return (
        <Container>
                <Title>Explore</Title>
                <DropDownDiv>
                    <Select onChange={handleChange}>
                        <option>By Style</option>
                        <option>opt 1</option>
                        <option>opt 2</option>
                        <option>opt 3</option>
                    </Select>
                    <Select onChange={handleChange}>
                        <option>By Location</option>
                        <option>opt 1</option>
                        <option>opt 2</option>
                        <option>opt 3</option>
                    </Select>
                    <Select onChange={handleChange}>
                        <option>By Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>Doesn't matter</option>
                    </Select>
                </DropDownDiv>
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
`
const Select = styled.select`
background-color: #E6E6E6;
border: 1px solid #F65D5A;
color: #F65D5A;
width: 25%;
height: 2rem;
font-size: 16px;

`
const Main = styled.div`
background-color: #E6E6E6;
border-radius: 1rem;
padding: 1rem;
`

export default Explore;