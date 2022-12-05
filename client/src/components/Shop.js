import styled from "styled-components"
import Footer from "./Footer";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiAlertCircle } from "react-icons/fi";

const Shop = () => {
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
                <Title>{artist.name}'s shop:</Title>

                <MainCard>
                {artist && artist.media.shop.map((img) => {
                    return (
                        <ShopCard to={`/${artistId}/checkout`}>
                            <Img key={img} src={img}/>
                            <Price>Price: 100$</Price>
                            <Text><FiAlertCircle size={12}/> Price is defined by artist and could be subject to change.</Text>
                        </ShopCard>
                    )
                })}
                </MainCard>
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
/* background-color: #E6E6E6; */
border-radius: 1rem;
padding: 1rem;
`
const Text = styled.p`
color: gray;
font-size: 12px;
padding: 0 1rem;
text-align: center;
`
const Img = styled.img`
width: 20rem;
height: 20rem;
padding: 1rem;
border-radius: 1rem;
`
const BackDiv = styled.div`
display: flex;
text-align: center;
margin-top: 2rem;
`
const Nav = styled(NavLink)`
text-decoration: none;
color: #F65D5A;

&:hover {
    color: #F98D8B;
}
`

const Price = styled.p`
padding: 0 1rem;
text-align: center;
`
const MainCard = styled.div`
display: flex;
gap: 2rem;
`
const ShopCard = styled(NavLink)`
text-decoration: none;
color: #F65D5A;
background-color: #E6E6E6;
display: flex;
flex-direction: column;
border-radius: 1rem;
`
export default Shop;