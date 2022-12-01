import styled from "styled-components"
import Footer from "./Footer";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const AboutUs = () => {
    return (
        <Container>
            <AboutCard>
                <Title>About Us</Title>
                <Text>
                    TattooWix is a Professional eCommerce Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of eCommerce, with a focus on dependability and tattoo. We're working to turn our passion for eCommerce into a booming online website. We hope you enjoy our eCommerce as much as we enjoy offering them to you.
                </Text>

                <IconsDiv>
                    <Button>
                        <FiInstagram size={20}/>
                    </Button>

                    <Button>
                        <FiFacebook size={20}/>
                    </Button>

                    <Button>
                        <FiTwitter size={20}/>
                    </Button>
                </IconsDiv>
            </AboutCard>
            <Footer/>
        </Container>
    )
}


//styling 
const Container = styled.div`
padding: 0.5rem;
`
const Title = styled.h1`
margin: 0;
color: #F65D5A;
`
const AboutCard = styled.div`
background-color: #E6E6E6;
padding: 1rem;
border-radius: 1rem;
margin: 5%;
filter: drop-shadow(10px 5px 29px #000);
`
const IconsDiv = styled.div`
display: flex;
gap: 1rem;
`
const Button = styled.button`
border: none;
background-color: inherit;
cursor: pointer;

&:active {
    color: #F65D5A;
}

&:hover {
    color: gray;
}
`
const Text = styled.p`
color: #F65D5A;
`
export default AboutUs;