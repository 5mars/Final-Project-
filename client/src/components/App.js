import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "./Context";

import GlobalStyle from "../GlobalStyles";
import NavBar from "./NavBar";
import Homepage from "./HomePage";
import Explore from "./Explore";
import Discover from "./Discover";
import Feed from "./Feed";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Forgot from "./Forgot";
import Profile from "./Profile";
import AboutUs from "./AboutUs";
import Error from "./Error";
import ArtistProfile from "./ArtistProfile";
import Booking from "./Booking";
import Confirmation from "./Confirmation";
import Gallery from "./Gallery";
import Shop from "./Shop";
import Checkout from "./Checkout";
import ShopConfirmation from "./ShopConfirmation";


const App = () => {

  const {currentUser, setCurrentUser} = React.useContext(UserContext);
  const {user} = useAuth0();
  // useEffect(() => {
  //     user && fetch(`/api/get-user/${user.email}`)
  //     .then(res => res.json())
  //     .then(data => {
  //         setCurrentUser(data.data)
  //     })
  // }, [user])

  return (
      <BrowserRouter>
        <GlobalStyle/>
        <NavBar/>
          <Main>
            <Routes>
              <Route path="/" element={<Homepage/>}></Route>
              <Route path="/explore" element={<Explore/>}></Route>
              <Route path="/discover" element={<Discover/>}></Route>
              <Route path="/feed" element={<Feed/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/signin" element={<SignIn/>}></Route>
              <Route path="/forgot" element={<Forgot/>}></Route>
              <Route path="/profile" element={<Profile/>}></Route>
              <Route path="/:artistId" element={<ArtistProfile/>}></Route>
              <Route path="/aboutus" element={<AboutUs/>}></Route>
              <Route path="/error" element={<Error/>}></Route>
              <Route path="/confirmation/:reservationId" element={<Confirmation/>}></Route>
              <Route path="/shopconfirmation/:transactionId" element={<ShopConfirmation/>}></Route>
              <Route path="/:artistId/booking" element={<Booking/>}/>
              <Route path="/:artistId/gallery" element={<Gallery/>}/>
              <Route path="/:artistId/shop" element={<Shop/>}/>
              <Route path="/:artistId/checkout" element={<Checkout/>}/>
            </Routes>
          </Main>
      </BrowserRouter>
  );
};


//styling
const Main = styled.div``;
export default App;


