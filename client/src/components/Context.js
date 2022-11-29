import { createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const {user} = useAuth0();
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    );
};