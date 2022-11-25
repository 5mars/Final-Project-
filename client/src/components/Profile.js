import styled from "styled-components"
import Footer from "./Footer";
import profile from "../unDraw/profile.svg"
import profilePic from "../unDraw/profilePic.svg"
import { FiMapPin } from "react-icons/fi";

const Profile = () => {
    return (
        <Container>
            <ProfileCard>
                <Title>Profile</Title>
                <ProfilePicImg src={profilePic} alt="Profile picture"/>
                
                <Infos>
                    <Name>Name</Name>
                    <Text>Gender</Text>
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