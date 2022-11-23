import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "../GlobalStyles";
import NavBar from "./NavBar";
import Homepage from "./HomePage";
import Explore from "./Explore";
import Discover from "./Discover";
import Inspiration from "./Inspiration";

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
            <Route path="/inspiration" element={<Inspiration/>}></Route>
          </Routes>
        </Main>
    </BrowserRouter>
  );
};


//styling
const Main = styled.div``;
export default App;


