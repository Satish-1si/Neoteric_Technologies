import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About.js'
import Careers from '../Careers/Careers.jsx'
import ContactUs from '../ContactUs/ContactUs.jsx'
import Industries from '../Industries/Industries.js'
import NewsBlog from '../NewsBlog/NewsBlog.jsx'
import Services from '../services/services.js'
import Home from "../Home/Home.js"
export const Routers = ({Mode}) => {
  return (
    <Routes>
      <Route path="/" element={<Home Mode={Mode}/> }> </Route>
      <Route path="services" element={<Services Mode={Mode}/>}> </Route>
      <Route path="industries" element={<Industries Mode={Mode}/>}> </Route>
      <Route path="careers" element={<Careers Mode={Mode}/>}> </Route>
      <Route path="about" element={<About Mode={Mode}/>}> </Route>
      <Route path="contact" element={<ContactUs Mode={Mode}/>}> </Route>
      <Route path="News_Blog" element={<NewsBlog Mode={Mode}/>}> </Route>
    </Routes>

  )
}
