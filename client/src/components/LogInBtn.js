import { useAuth0, User } from "@auth0/auth0-react";
import styled from "styled-components";


const LogInBtn = () => {
    const { loginWithRedirect, isAuthenticated} = useAuth0();

    return (
        !isAuthenticated && (
        <Button onClick={()=> loginWithRedirect()}>Log In</Button>
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
    color: #F98D8B;
}
`
export default LogInBtn;