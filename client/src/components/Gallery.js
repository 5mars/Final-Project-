import styled from "styled-components"
import Footer from "./Footer";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";


const Gallery = () => {
    const [artist, setArtist] = useState(null);
    const {artistId} = useParams();
    const navigate = useNavigate();
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
            {!artist ? <Title>Loading...</Title> : 
            <>
            <Main>
                <Title>Gallery</Title>
                <p>{artist.name}</p>
                {artist && artist.media.images.map((img) => {
                    return(
                        <Img key={img} src={img}/>
                    )
                })}
                <BackDiv>
                    <Nav onClick={() => navigate(-1)}><FiArrowLeft/>Return</Nav>
                </BackDiv>
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
background-color: #E6E6E6;
border-radius: 1rem;
padding: 1rem;
`

const Img = styled.img`
width: 10rem;
height: 10rem;
object-fit: scale-down;
`
const BackDiv = styled.div`
display: flex;
text-align: center;
`
const Nav = styled(NavLink)`
text-decoration: none;
color: #F65D5A;

&:hover {
    color: #F98D8B;
}
`
export default Gallery;