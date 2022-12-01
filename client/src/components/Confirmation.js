import styled from "styled-components"
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

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
            <Main>
                <Title>Confirmation page</Title>

            </Main>
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
export default Confirmation;