import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {Navbar, Feed, ChannelDetail, Videodetail, SearchFeed } from './components/index';

const App = () => (
  <BrowserRouter>
    <Box sx={{background : "#000", color : 'white'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/videos/:id" element={<Videodetail/>}/>
        <Route path="/channel/:id" element={<ChannelDetail/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App;
