import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LogOutBtn = () => {
    const { logout, isAuthenticated, user} = useAuth0();

    return (
        isAuthenticated && (
            <>
                <Hello to="/profile">Hello, {user.nickname}</Hello>
                <Button onClick={() => logout()}>Log out</Button>
            </>
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
}`

const Hello = styled(NavLink)`
color: #E6E6E6;
text-decoration: none;
cursor: pointer;
&:hover {
    color: lightgray;
}`

export default LogOutBtn;