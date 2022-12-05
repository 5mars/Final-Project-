import { createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const {user} = useAuth0();
    const [currentUser, setCurrentUser] = useState(null);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        user && fetch(`/api/get-user/${user.email}`)
        .then(res => res.json())
        .then(data => {
        setCurrentUser(data.data)
    })
}, [user])
    return (
        <UserContext.Provider value={{setRefresh, refresh, currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    );
};