import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";


const LogOutBtn = () => {
    const { logout, isAuthenticated, user} = useAuth0();
    console.log(user)
    return (
        isAuthenticated && (
        <Button onClick={() => logout()}>log out</Button>
        )
    )
}
//styling
const Button = styled.button`
background-color: inherit;
border: none;
color: #F65D5A;
font-size: 16px;
cursor: pointer;
&:hover {
    color: #F42D2A;
}`


export default LogOutBtn;