import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage'
import { Routes, Route, Link } from "react-router-dom";
import News from './pages/News&Insight'
import ContactPage from './pages/ContactPage'
import AboutUs from './pages/AboutUs'
import CareerDetails from './pages/CareerDetails'
import EducationDetails from './pages/EducationDetails'
import AcademiesDetails from './pages/AcademiesDetails'
import StarDetails from './pages/StarDetails'
import IndianaG from "./pages/IndianaG.jsx"




 


function App() {

  return (
    <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/brands" element={<CareerDetails />} />
            <Route path="/education" element={<EducationDetails />} />
            <Route path="/academies" element={<AcademiesDetails />} />
            <Route path="/stars" element={<StarDetails />} />
            <Route path="/indiana-g" element={<IndianaG />} />
           
            
          </Routes>
    </div>
  )
}

export default App
