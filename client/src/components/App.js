import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

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

const App = () => {
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
            <Route path="/aboutus" element={<AboutUs/>}></Route>
            <Route path="/error" element={<Error/>}></Route>
          </Routes>
        </Main>
    </BrowserRouter>
  );
};


//styling
const Main = styled.div``;
export default App;


