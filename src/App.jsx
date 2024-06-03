import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PastOBs from './Components/Past Obs/PastOBs';
import NavBar from './Components/NavBar'
import WebsiteLandingPage from './Components/WebsiteLandingPage';


const App = () => {
  return (
   <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path = "/" element={<WebsiteLandingPage />} />
      <Route path="/pastobs" element={<PastOBs />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App