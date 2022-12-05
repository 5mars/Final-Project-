import styled from "styled-components"
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useLocation, useParams, NavLink } from "react-router-dom";

const ShopConfirmation = () => {
    const [transaction, setTransaction] = useState(null);
    const location = useLocation();
    const {transactionId} = useParams();

    useEffect(() => {
        fetch(`/api/shopconfirmation/${transactionId}`)
        .then(res => res.json())
        .then((data) => {
            setTransaction(data.data)
        })
    }, [])

    return (
        <Container> {transaction && 
            <Main>
                <Title>Shop Confirmation Page</Title>
                <p>Transaction ID : {transaction.id}</p>
                <p>Name: {transaction.name}</p>
                <p>Email: {transaction.email}</p>
                <p>Price: 100$</p>
                <p>From artist: {transaction.fromArtist.artistId}</p>
                <Title>Thank you for using our service! Be ready for a beautiful new tattoo!</Title>
                <Nav to="/">Return to HomePage</Nav>
            </Main>
        }
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
const Main = styled.div`
background-color: #E6E6E6;
border-radius: 1rem;
padding: 1rem;
`

const Nav = styled(NavLink)`
text-decoration: none;
color: #F65D5A;
`
export default ShopConfirmation;