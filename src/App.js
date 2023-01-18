import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Allfiles from './Portfolio/Allfiles';
import Navbar from './Portfolio/Navbar';
import Aboutpage from './Portfolio/Aboutpage';
import Rcentprojects from './Portfolio/Rcentprojects';
import Contacts from './Portfolio/Contacts';
import Technicalskills from './Portfolio/Technicalskills';
function App() {
  
  return (
    <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Allfiles />} />
          <Route path="/Technicalskills" element={<Technicalskills />} />
          <Route path="/Rcentprojects" element={<Rcentprojects />} />
          <Route path="/Aboutpage" element={<Aboutpage />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
