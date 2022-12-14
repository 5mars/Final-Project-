import styled from "styled-components"
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useLocation, useParams, NavLink } from "react-router-dom";

const Confirmation = () => {
    const [reservation, setReservation] = useState(null);
    const location = useLocation();
    const {reservationId} = useParams();

    useEffect(() => {
        fetch(`/api/confirmation/${reservationId}`)
        .then(res => res.json())
        .then((data) => {
            setReservation(data.data)
        })
    }, [])

    return (
        <Container>
            {reservation ?  
            <Main>
                <Title>Confirmation page</Title>
                <p>Reservation ID : {reservation.id}</p>
                <p>Name: {reservation.name}</p>
                <p>Email: {reservation.email}</p>
                <p>Time: {reservation.appointment}</p>
                <p>Precision: {reservation.precision}</p>
                <p>Artist name: {reservation.withArtist.artistId}</p>
                <Title>Thank you for using our service! Be ready for a beautiful new tattoo!</Title>
                <NavLink to="/">Return to HomePage</NavLink>
            </Main>
: <Title>Loading...</Title>}
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
export default Confirmation;